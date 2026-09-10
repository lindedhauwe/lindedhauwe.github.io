// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at lindedhauwe.github.io/portfolio-2026/.
// When lindedhauwe.be is set up: drop `base`, set `site` to the domain,
// add a CNAME, and switch the internal links back (see src/lib/paths.ts).
export default defineConfig({
	site: 'https://lindedhauwe.github.io',
	base: '/portfolio-2026/',
});
