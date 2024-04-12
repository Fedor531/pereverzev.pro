import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Frontend developer | Fedor Pereverzev',
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
        },
      ],
      meta: [
        // Чтобы сафари не выделял номера и адреса
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', content: 'address=no' },

        { name: 'msapplication-TileColor', content: '#040404' },
        { name: 'theme-color', content: '#040404' },
        { name: 'author', content: 'Fedor Pereverzev <fedor531@yandex.ru>' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Frontend developer | Fedor Pereverzev' },
      ],
    },
  },

  css: [
    '~/assets/styles/variables.pcss',
    '~/assets/styles/index.pcss',
  ],

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

// <link rel="icon" href="/icon.svg" type="image/svg+xml">
