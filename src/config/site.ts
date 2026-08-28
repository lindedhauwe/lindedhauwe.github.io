/**
 * Single source of truth for site-wide identity and contact details.
 * Nav, footer, contact page and SEO tags all read from here.
 */

export const site = {
	name: "Linde D'Hauwe",
	title: 'Portfolio 2026',
	description:
		"Portfolio of Linde D'Hauwe — Digital Design & Development student. Projects across UX, illustration, graphic design and front-end development.",
	email: 'linde.dhauwe@outlook.com',
	/** International format, e.g. "+32 476 12 34 56". Empty = hidden. */
	phone: '',
	locale: 'en',
} as const;

export const nav = [
	{ label: 'about me', href: '/about/' },
	{ label: 'projects', href: '/projects/' },
	{ label: 'contact', href: '/contact/' },
] as const;

export const socials: { label: string; href: string }[] = [
	{ label: 'Instagram', href: 'https://instagram.com/lindedhauwe' },
	{ label: 'Behance', href: 'https://www.behance.net/lindedhauwe' },
	{ label: 'GitHub', href: 'https://github.com/lindedhauwe' },
	// { label: 'LinkedIn', href: 'https://linkedin.com/in/…' },
];
