// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://ioriot.com',
	integrations: [sitemap(), pagefind()],
	adapter: vercel(),
});
