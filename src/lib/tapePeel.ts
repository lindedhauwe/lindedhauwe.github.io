import { withBase } from './paths';

/**
 * Plays the tape-peel recording when you hover a card — like pulling a
 * taped photo off the wall. Off on touch / reduced-motion, and silent
 * until the visitor has interacted with the page (autoplay policy).
 *
 * Shared by the project wall's polaroids and the home page's "Selected
 * work" cards — both use the same washi-tape decoration.
 */
export function initTapePeel(selector: string) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (!window.matchMedia('(hover: hover)').matches) return;

	const cards = document.querySelectorAll<HTMLElement>(selector);
	if (!cards.length) return;

	type Ctx = AudioContext & { state: string };
	const AC =
		window.AudioContext ||
		(window as unknown as { webkitAudioContext: typeof AudioContext })
			.webkitAudioContext;
	const ctx = new AC() as Ctx;
	let clip: AudioBuffer | null = null;
	let last = 0;

	// decode the clip straight away so it's ready the instant sound unlocks
	fetch(withBase('/sfx/tape.mp3'))
		.then((r) => r.arrayBuffer())
		.then((b) => ctx.decodeAudioData(b))
		.then((buf) => (clip = buf))
		.catch(() => {});

	// browsers keep audio muted until *some* interaction — resume on the
	// first of pretty much anything the visitor does (move, scroll, key…)
	const unlock = () => {
		if (ctx.state !== 'running') ctx.resume();
		if (ctx.state === 'running') {
			for (const ev of unlockEvents)
				window.removeEventListener(ev, unlock, true);
		}
	};
	const unlockEvents = [
		'pointerdown',
		'pointermove',
		'pointerup',
		'keydown',
		'wheel',
		'scroll',
		'touchstart',
	];
	for (const ev of unlockEvents)
		window.addEventListener(ev, unlock, { capture: true, passive: true });

	const play = () => {
		if (ctx.state !== 'running') ctx.resume();
		if (!clip || ctx.state !== 'running') return;
		const src = ctx.createBufferSource();
		src.buffer = clip;
		src.playbackRate.value = 0.9 + Math.random() * 0.2;
		const gain = ctx.createGain();
		gain.gain.value = 0.85;
		src.connect(gain);
		gain.connect(ctx.destination);
		src.start();
	};

	cards.forEach((card) => {
		if (card.dataset.peel) return;
		card.dataset.peel = 'true';
		card.addEventListener('pointerenter', () => {
			const t = performance.now();
			if (t - last < 120) return;
			last = t;
			play();
		});
	});
}
