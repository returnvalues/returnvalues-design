module.exports = {
  build: {
    extend(config, { isClient }) {
      if (isClient && process.env.NODE_ENV === 'development') {
        config.devtool = 'inline-source-map'; // eslint-disable-line no-param-reassign
      }
    },
  },
};
