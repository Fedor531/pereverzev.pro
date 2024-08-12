import path from 'path';

export default defineNuxtConfig({
	srcDir: 'src',
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Frontend developer | Fedor Pereverzev',
			script: [
				{
					tagPosition: 'head',
					innerHTML: `
						if (matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
							document.documentElement.style.display = 'none';
							document.head.insertAdjacentHTML(
								'beforeend',
								'<link rel="stylesheet" href="/assets/styles/light.css" onload="document.documentElement.style.display=\\'\\'">'
							);
						}
				  `,
				},
			],
			link: [
				{
					rel: 'shortcut icon',
					type: 'image/svg+xml',
					href: '/logo.svg',
				},
				{
					rel: 'preload',
					as: 'font',
					fetchpriority: 'high',
					href: '/assets/fonts/montserrat-v26-cyrillic_latin-regular.woff2',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					as: 'font',
					fetchpriority: 'high',
					href: '/assets/fonts/montserrat-v26-cyrillic_latin-500.woff2',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					as: 'font',
					fetchpriority: 'high',
					href: '/assets/fonts/montserrat-v26-cyrillic_latin-600.woff2',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
				{
					rel: 'preload',
					as: 'font',
					fetchpriority: 'high',
					href: '/assets/fonts/montserrat-v26-cyrillic_latin-700.woff2',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
			],
			meta: [
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'format-detection', content: 'address=no' },
				{ name: 'author', content: 'Fedor Pereverzev <fedor531@yandex.ru>' },
				{ name: 'description', content: 'Frontend developer | Fedor Pereverzev' },

				{
					name: 'color-scheme',
					content: 'light dark',
				},
				{
					name: 'theme-color',
					media: '(prefers-color-scheme: light)',
					content: '#ffffff',
				},
				{
					name: 'theme-color',
					media: '(prefers-color-scheme: dark)',
					content: '#222222',
				},
			],
		},

		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
	},
	routeRules: {
		'/client/default': {
			ssr: false,
		},
		'/client/pre-render': {
			ssr: false,
			prerender: true // Соберет страничку, но запрос за данными будет будет на клиенте
		},
		// '/client/cache-swr-30-s-date': { // Cache на клиенте не работает
		// 	ssr: false,
		// 	swr: true, // Данные запрашиваются и кешируются, след обновление через 30 секунд принудительно
		// },

		'/ssr/pre-render': {
			prerender: true // Вызывается запрос useAsyncData или useFetch при билде и складывается в /pre-render-ssr/_payload.json, НО ЗАПРОС БОЛЬШЕ НЕ БУДЕТ ПРОИСХОДИТ НА СЕРВЕРЕ, ПРОИСХОДИТ ОДИН РАЗ НА ПРИ СБОРКЕ, ТО есть данные сложаться один раз
		},
		'/ssr/cache-swr': {
			swr: true, // Данные запрашиваются и кешируются сервере, фоном на сервере идет запрос и если данные с api отличаются, кеш обновляется
			// При spa все равно будут запросы проходть
		},
		'/ssr/cache-swr-30-s-date': {
			swr: 30, // Данные запрашиваются и кешируются на сервере, след обновление через 30 секунд принудительно
			// При spa все равно будут запросы проходть
		},
	},

	runtimeConfig: {
		public: {
			NUXT_ENVIRONMENT: process.env.NUXT_ENVIRONMENT || '',
			NUXT_SITE_PROTOCOL: process.env.NUXT_SITE_PROTOCOL || '',
			NUXT_SITE_HOST: process.env.NUXT_SITE_HOST || '',
		},
	},

	css: [
		'~/assets/styles/fonts.pcss',
		'~/assets/styles/variables.pcss',
		'~/assets/styles/animations.pcss',
		'~/assets/styles/index.pcss',
	],

	modules: ['@nuxtjs/i18n'],
	i18n: {
		vueI18n: './i18n.config.ts',
	},

	postcss: {
		plugins: {
			'@csstools/postcss-global-data': {
				files: [
					path.resolve(__dirname, 'src/assets/styles/media-queries.pcss'),
				],
			},
			'postcss-custom-media': {},
			'postcss-nested': {},
			'postcss-normalize': {},
		},
	},

	features: {
		inlineStyles: false,
	},

	devtools: {
		enabled: false,
	},
});
