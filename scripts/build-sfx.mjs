/**
 * Convert raw sound recordings into web audio (mp3 + ogg).
 *
 *   Source:  src/assets/*.mov  (QuickTime recordings)
 *   Run:     npm run build:sfx
 *   Output:  public/sfx/*.mp3  +  *.ogg
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync, statSync } from 'node:fs';
import ffmpeg from 'ffmpeg-static';

mkdirSync('public/sfx', { recursive: true });

const clips = [{ src: 'src/assets/tape.mov', out: 'tape' }];
const kb = (p) => (statSync(p).size / 1024).toFixed(1);

for (const clip of clips) {
	if (!existsSync(clip.src)) {
		console.warn(`skip — missing ${clip.src}`);
		continue;
	}
	const mp3 = `public/sfx/${clip.out}.mp3`;
	const ogg = `public/sfx/${clip.out}.ogg`;

	execFileSync(
		ffmpeg,
		['-y', '-i', clip.src, '-vn', '-ac', '1', '-ar', '44100', '-c:a', 'libmp3lame', '-q:a', '5', mp3],
		{ stdio: ['ignore', 'ignore', 'inherit'] },
	);
	execFileSync(
		ffmpeg,
		['-y', '-i', clip.src, '-vn', '-ac', '1', '-ar', '44100', '-c:a', 'libvorbis', '-q:a', '3', ogg],
		{ stdio: ['ignore', 'ignore', 'inherit'] },
	);
	console.log(`${mp3}  ${kb(mp3)} KB   ·   ${ogg}  ${kb(ogg)} KB`);
}
