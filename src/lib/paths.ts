/**
 * Deploy-base helpers.
 *
 * The site is served from a sub-path on GitHub Pages
 * (`/portfolio-2026/`), so every hard-coded root path — internal links,
 * `public/` asset URLs, favicons, the OG image — has to be prefixed with
 * `import.meta.env.BASE_URL`. Imported assets (`src/assets/**`, `<Image>`,
 * `import.meta.glob`) are handled by Astro automatically and don't need this.
 *
 * When the custom domain is live, `base` goes away, `BASE_URL` becomes
 * `/`, and every `withBase()` call is a harmless no-op.
 */

const BASE = import.meta.env.BASE_URL; // "/portfolio-2026/" or "/"

/** Prefix an app-absolute path with the deploy base. */
export const withBase = (path: string): string =>
	BASE.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

/** Remove the deploy base from a pathname (for active-link checks). */
export const stripBase = (pathname: string): string => {
	const b = BASE.replace(/\/$/, '');
	if (b && pathname.startsWith(b)) return pathname.slice(b.length) || '/';
	return pathname;
};
