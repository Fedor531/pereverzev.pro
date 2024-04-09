import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
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

  devtools: {
    enabled: false,
  },
});
