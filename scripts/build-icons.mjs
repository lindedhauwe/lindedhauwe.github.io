/**
 * Generate the raster icons + the social share (OG) image.
 *
 *   Run:  npm run build:icons
 *
 * Source of truth:  public/favicon.svg
 * Outputs:  public/favicon.ico, public/apple-touch-icon.png, public/og.png
 */
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

const faviconSvg = readFileSync('public/favicon.svg');

// --- favicon.ico (16 + 32 + 48) ---
const icoSizes = await Promise.all(
	[16, 32, 48].map((s) => sharp(faviconSvg).resize(s, s).png().toBuffer()),
);
writeFileSync('public/favicon.ico', await pngToIco(icoSizes));

// --- apple-touch-icon (180, opaque) ---
await sharp(faviconSvg)
	.resize(180, 180)
	.flatten({ background: '#CD5B25' })
	.png()
	.toFile('public/apple-touch-icon.png');

// --- OG / share image (1200 x 630) ---
const luckiest = readFileSync(
	'node_modules/@fontsource/luckiest-guy/files/luckiest-guy-latin-400-normal.woff',
);
const caveat = readFileSync(
	'node_modules/@fontsource/caveat/files/caveat-latin-700-normal.woff',
);
const portrait =
	'data:image/png;base64,' +
	readFileSync('src/assets/illustrations/selfportrait.png').toString('base64');

const card = {
	type: 'div',
	props: {
		style: {
			display: 'flex',
			width: '100%',
			height: '100%',
			background: '#518554',
		},
		children: [
			{
				type: 'div',
				props: {
					style: {
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						flex: 1,
						padding: '0 72px',
					},
					children: [
						{
							type: 'div',
							props: {
								style: { fontFamily: 'Luckiest Guy', fontSize: 132, color: '#FFFDFC', lineHeight: 1 },
								children: 'PORTFOLIO',
							},
						},
						{
							type: 'div',
							props: {
								style: { fontFamily: 'Luckiest Guy', fontSize: 132, color: '#EAC3B2', lineHeight: 1.05 },
								children: '2026',
							},
						},
						{
							type: 'div',
							props: {
								style: { fontFamily: 'Caveat', fontSize: 52, color: '#FFFDFC', marginTop: 20 },
								children: 'Linde D’Hauwe',
							},
						},
					],
				},
			},
			{
				type: 'div',
				props: {
					style: {
						display: 'flex',
						width: 430,
						height: '100%',
						background: '#EAC3B2',
						alignItems: 'flex-end',
						justifyContent: 'center',
						overflow: 'hidden',
					},
					children: [
						{
							type: 'img',
							props: { src: portrait, style: { width: 300, marginBottom: -20 } },
						},
					],
				},
			},
		],
	},
};

const ogSvg = await satori(card, {
	width: 1200,
	height: 630,
	fonts: [
		{ name: 'Luckiest Guy', data: luckiest, weight: 400, style: 'normal' },
		{ name: 'Caveat', data: caveat, weight: 700, style: 'normal' },
	],
});
writeFileSync(
	'public/og.png',
	new Resvg(ogSvg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng(),
);

console.log('icons + og.png written');
