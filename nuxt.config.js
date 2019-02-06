module.exports = {
  build: {
    extend(config, { isClient }) {
      if (isClient && process.env.NODE_ENV !== 'production') {
        config.devtool = 'inline-source-map'; // eslint-disable-line no-param-reassign
      }
    },
  },
  head: {
    title: 'ReturnValues Design',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: './favicon.ico',
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  plugins: ['~/plugins/ReturnvaluesDesign', '~/plugins/GlobalComponents']
};
