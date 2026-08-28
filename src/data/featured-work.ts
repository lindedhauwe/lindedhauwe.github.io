import type { ImageMetadata } from 'astro';
import thrive from '../assets/projects/thrive.png';
import hoogtevrees from '../assets/projects/hoogtevrees.png';
import bigClick from '../assets/projects/the-big-click.png';

export interface Work {
	title: string;
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
		image: thrive,
		alt: 'Thrive Time campaign website',
		href: '/projects/',
	},
	{
		title: 'Hoogtevrees',
		image: hoogtevrees,
		alt: 'Hoogtevrees illustrated website',
		href: '/projects/',
	},
	{
		title: 'The Big Click',
		image: bigClick,
		alt: 'The Big Click idle game',
		href: '/projects/',
	},
];
