import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const dev = process.argv.includes('dev');
const mdsvexExtensions = ['.md', '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/feedback-sense-check'
		}
	},
	preprocess: [vitePreprocess(), mdsvex({ extensions: mdsvexExtensions })],
	extensions: ['.svelte', ...mdsvexExtensions]
};

export default config;
