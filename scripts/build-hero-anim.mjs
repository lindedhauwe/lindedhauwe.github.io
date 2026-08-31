/**
 * Convert the Procreate hero animation (an APNG export) into optimised
 * animated WebP files for the home hero + a still poster for reduced-motion.
 *
 *   1. Export the animation from Procreate as an *Animated PNG*.
 *   2. Save it to  src/assets/animations/header-animation.png  (git-ignored).
 *   3. Run:  node scripts/build-hero-anim.mjs
 *
 * Outputs to /public:  hero-anim-1200.webp, hero-anim-760.webp, hero-poster.webp
 * (libvips can't read APNG frames, hence upng-js + node-webpmux.)
 */
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import UPNG from 'upng-js';
import WebP from 'node-webpmux';
import sharp from 'sharp';

const SRC = 'src/assets/animations/header-animation.png';
const KEEP_EVERY = 2; // 32 source frames -> 16

const png = UPNG.decode(readFileSync(SRC));
const W = png.width;
const H = png.height;
const rgbaFrames = UPNG.toRGBA8(png).map((ab) => Buffer.from(ab));
const delays = (png.frames || []).map((f) => f.delay || 66);

await WebP.Image.initLib();

async function buildAnim(width, quality, alphaQuality, file) {
	const height = Math.round((H * width) / W);
	const frames = [];
	for (let i = 0; i < rgbaFrames.length; i += KEEP_EVERY) {
		const still = await sharp(rgbaFrames[i], {
			raw: { width: W, height: H, channels: 4 },
		})
			.resize({ width, height })
			.webp({ quality, alphaQuality, effort: 6, preset: 'drawing' })
			.toBuffer();
		frames.push(
			await WebP.Image.generateFrame({
				buffer: still,
				delay: (delays[i] || 66) * KEEP_EVERY,
				blend: false,
				dispose: false,
			}),
		);
	}
	const out = await WebP.Image.save(null, {
		frames,
		width,
		height,
		bgColor: [0, 0, 0, 0],
		loops: 0,
	});
	writeFileSync(file, out);
	console.log(`${file}  ${(out.length / 1024).toFixed(0)} KB  ${width}x${height}  ${frames.length} frames`);
}

await buildAnim(1200, 50, 46, 'public/hero-anim-1200.webp');
await buildAnim(760, 52, 46, 'public/hero-anim-760.webp');

await sharp(rgbaFrames[0], { raw: { width: W, height: H, channels: 4 } })
	.resize({ width: 1400 })
	.webp({ quality: 80, effort: 6 })
	.toFile('public/hero-poster.webp');
console.log(
	`public/hero-poster.webp  ${(statSync('public/hero-poster.webp').size / 1024).toFixed(0)} KB`,
);
