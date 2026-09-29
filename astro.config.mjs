// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://abaddad.github.io',
	// GitHub Pages serves this repo at /<repo>, not at the domain root.
	base: '/abaddad',
});
