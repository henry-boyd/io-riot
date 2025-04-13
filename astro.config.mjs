// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	site: 'https://techandconsequence.com',
	integrations: [sitemap(), pagefind()],
});
