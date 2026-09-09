/**
 * Compress the raw case-study videos into web-sized MP4s + poster frames.
 *
 *   Source:  src/assets/detailPages/*.mp4   (git-ignored — keep locally)
 *   Run:     npm run build:vid
 *   Output:  public/videos/*.mp4  +  public/videos/*-poster.jpg
 *
 * Uses a bundled ffmpeg (ffmpeg-static) — no system install needed.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, statSync, existsSync } from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

const OUT_DIR = 'public/videos';
const SRC_DIR = 'src/assets/detailPages';

const clips = [
	{ src: 'antwerpOnTab-caseMovie.mp4', out: 'antwerp-case-movie', crf: 26, audio: true, poster: 3 },
	{ src: 'kickstarter-final.mp4', out: 'kickstarter-final', crf: 25, audio: true, poster: 2 },
	{ src: 'kickstarter-animatic.mp4', out: 'kickstarter-animatic', crf: 27, audio: true, poster: 2 },
	{ src: 'nmbs-video.mp4', out: 'nmbs', crf: 24, audio: false, poster: 3 },
];

mkdirSync(OUT_DIR, { recursive: true });
const mb = (p) => (statSync(p).size / 1048576).toFixed(1);

for (const clip of clips) {
	const src = `${SRC_DIR}/${clip.src}`;
	if (!existsSync(src)) {
		console.warn(`skip — missing ${src}`);
		continue;
	}
	const mp4 = `${OUT_DIR}/${clip.out}.mp4`;
	const poster = `${OUT_DIR}/${clip.out}-poster.jpg`;

	execFileSync(
		ffmpegPath,
		[
			'-y',
			'-i', src,
			'-c:v', 'libx264',
			'-crf', String(clip.crf),
			'-preset', 'slow',
			'-profile:v', 'high',
			'-pix_fmt', 'yuv420p',
			'-movflags', '+faststart',
			...(clip.audio ? ['-c:a', 'aac', '-b:a', '128k'] : ['-an']),
			mp4,
		],
		{ stdio: ['ignore', 'ignore', 'inherit'] },
	);

	execFileSync(
		ffmpegPath,
		['-y', '-ss', String(clip.poster), '-i', src, '-frames:v', '1', '-q:v', '3', poster],
		{ stdio: ['ignore', 'ignore', 'inherit'] },
	);

	console.log(
		`${mp4}  ${mb(src)}MB → ${mb(mp4)}MB   ·   ${poster}  ${mb(poster)}MB`,
	);
}
