// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at the account's root site: lindedhauwe.github.io
// (repo renamed from portfolio-2026 so the link survives future redesigns).
// No `base` needed — a user/org root site is already served from "/".
// `withBase()` (see src/lib/paths.ts) is a harmless no-op here; if
// lindedhauwe.be is set up later, just set `site` to the domain and add
// a CNAME — everything else already works unchanged.
export default defineConfig({
	site: 'https://lindedhauwe.github.io',
});
