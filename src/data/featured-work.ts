import type { ImageMetadata } from 'astro';
import thrive from '../assets/projects/thrive.png';
import hoogtevrees from '../assets/projects/hoogtevrees.png';
import bigClick from '../assets/projects/the-big-click.png';

export interface Work {
	title: string;
	blurb: string;
	tags: string[];
	image: ImageMetadata;
	alt: string;
	href: string;
}

/**
 * Placeholder set for the home "Selected work" teaser.
 * The Projects page will move this into a proper content collection —
 * point the teaser at a `featured` filter of that collection then.
 */
export const featuredWork: Work[] = [
	{
		title: 'Thrive Time',
		blurb:
			'A digital-first campaign that turns a recovery beer into an everyday wind-down ritual.',
		tags: ['Campaign', 'Art direction', 'Figma'],
		image: thrive,
		alt: 'Thrive Time campaign website hero',
		href: '/projects/',
	},
	{
		title: 'Hoogtevrees',
		blurb:
			'Give a tall person a ladder and things get weird — a story-driven site with three absurd uses for one object.',
		tags: ['Creative web', 'Illustration', 'JavaScript'],
		image: hoogtevrees,
		alt: 'Hoogtevrees illustrated website hero',
		href: '/projects/',
	},
	{
		title: 'The Big Click',
		blurb:
			'Build your own galaxy one click at a time — an idle game hand-coded in vanilla JavaScript.',
		tags: ['Creative code', 'Game', 'JavaScript'],
		image: bigClick,
		alt: 'The Big Click idle game screen',
		href: '/projects/',
	},
];
