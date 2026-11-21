import { defineConfig } from 'vite';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import { resolve } from 'node:path';
import VitePluginImageTools from 'vite-plugin-image-tools';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	base: process.env.BASE_PATH || '/',
	plugins: [
		handlebars({
			partialDirectory: resolve(process.cwd(), 'src/html'),
		}),

		VitePluginImageTools({
			quality: 82,

			enableDev: false,

			convert: {
				enable: true,
				format: 'webp',
				deleteOriginImg: true,
			},

			sharpConfig: {
				webp: {
					quality: 82,
					effort: 5,
				},
			},

			publicConfig: {
				enable: true,
				quality: 82,
			},

			log: true,
		}),

		svgSpritemap({
			pattern: 'src/resources/img/svg/*.svg',
			filename: 'assets/sprite.svg',
		}),
	],
});
