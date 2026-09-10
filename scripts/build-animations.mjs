/**
 * Convert APNG exports (Procreate / Procreate Dreams) into optimised animated
 * WebP files that browsers can actually play.
 *
 *   Run:     node scripts/build-animations.mjs   (or: npm run build:anim)
 *   Output:  public/animations/*.webp  +  *-poster.webp
 *
 * libvips / sharp can't read APNG frames, hence upng-js + node-webpmux.
 */
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import UPNG from 'upng-js';
import WebP from 'node-webpmux';
import sharp from 'sharp';

const OUT_DIR = 'public/animations';

const clips = [
	{ src: 'src/assets/detailPages/makingthingsmove-butterfly.png', out: 'butterfly', width: 900, quality: 72 },
	{ src: 'src/assets/detailPages/makingthingsmove-walkcycle.png', out: 'walk-cycle', width: 900, quality: 72 },
	{ src: 'src/assets/detailPages/makingthingsmove-spaceship.png', out: 'spaceship', width: 900, quality: 72 },
	{ src: 'src/assets/animations/contact-animation.png', out: 'contact', width: 920, quality: 60 },
];

mkdirSync(OUT_DIR, { recursive: true });
await WebP.Image.initLib();

for (const clip of clips) {
	const WIDTH = clip.width;
	const png = UPNG.decode(readFileSync(clip.src));
	const W = png.width;
	const H = png.height;
	const height = Math.round((H * WIDTH) / W);
	const rgba = UPNG.toRGBA8(png).map((ab) => Buffer.from(ab));
	const delays = (png.frames || []).map((f) => f.delay || 83);

	const frames = [];
	for (let i = 0; i < rgba.length; i++) {
		const still = await sharp(rgba[i], {
			raw: { width: W, height: H, channels: 4 },
		})
			.resize({ width: WIDTH, height })
			.webp({ quality: clip.quality, alphaQuality: 55, effort: 6, preset: 'drawing' })
			.toBuffer();
		frames.push(
			await WebP.Image.generateFrame({
				buffer: still,
				delay: delays[i] || 83,
				blend: false,
				dispose: false,
			}),
		);
	}

	const file = `${OUT_DIR}/${clip.out}.webp`;
	const buf = await WebP.Image.save(null, {
		frames,
		width: WIDTH,
		height,
		bgColor: [0, 0, 0, 0],
		loops: 0,
	});
	writeFileSync(file, buf);
	console.log(
		`${file}  ${(buf.length / 1024).toFixed(0)} KB  ${WIDTH}x${height}  ${frames.length} frames`,
	);

	// still poster (first frame) for prefers-reduced-motion
	await sharp(rgba[0], { raw: { width: W, height: H, channels: 4 } })
		.resize({ width: WIDTH })
		.webp({ quality: 80, effort: 6 })
		.toFile(`${OUT_DIR}/${clip.out}-poster.webp`);
	console.log(
		`${OUT_DIR}/${clip.out}-poster.webp  ${(
			statSync(`${OUT_DIR}/${clip.out}-poster.webp`).size / 1024
		).toFixed(0)} KB`,
	);
}
