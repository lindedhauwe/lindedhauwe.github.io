/**
 * Deploy-base helpers.
 *
 * Currently a no-op: the site is served from the account's root GitHub
 * Pages site (`lindedhauwe.github.io`, no sub-path), so `BASE_URL` is
 * just `/`. Kept in place from when the site lived at a sub-path
 * (`/portfolio-2026/`) so every hard-coded root path — internal links,
 * `public/` asset URLs, favicons, the OG image — was prefixed via
 * `import.meta.env.BASE_URL`. Imported assets (`src/assets/**`, `<Image>`,
 * `import.meta.glob`) are handled by Astro automatically and never needed
 * this. If the site ever moves to a sub-path (or a custom domain with
 * one) again, set `base` in astro.config.mjs and these calls do their
 * job again with zero other changes.
 */

const BASE = import.meta.env.BASE_URL; // "/" (root site)

/** Prefix an app-absolute path with the deploy base. */
export const withBase = (path: string): string =>
	BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

/** Remove the deploy base from a pathname (for active-link checks). */
export const stripBase = (pathname: string): string => {
	const b = BASE.replace(/\/$/, '');
	if (b && pathname.startsWith(b)) return pathname.slice(b.length) || '/';
	return pathname;
};
