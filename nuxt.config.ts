// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
	app: {
		head: {
			title: 'sakha alphabet transliterator',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
		// for static deploy gh-pages
		baseURL: '/nuxt-transition-pages/',
		buildAssetsDir: 'assets',
	},

	hooks: {
		'prerender:routes'({ routes }) {
			routes.clear();
		},
	},
	ssr: false,
});
