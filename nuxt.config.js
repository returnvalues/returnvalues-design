module.exports = {
  build: {
    extend(config, { isClient }) {
      if (isClient && process.env.NODE_ENV !== 'production') {
        config.devtool = 'inline-source-map'; // eslint-disable-line no-param-reassign
      }
    },
  },
  plugins: ['~/plugins/ReturnvaluesDesign']
};
