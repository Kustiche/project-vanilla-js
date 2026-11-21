import { defineConfig } from 'vite';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import VitePluginImageTools from 'vite-plugin-image-tools';

export default defineConfig({
	base: process.env.BASE_PATH || '/',
	plugins: [
		VitePluginImageTools({
			quality: 82,

			enableDev: false,

			convert: {
				enable: true,
				format: 'webp',
				deleteOriginImg: false,
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
