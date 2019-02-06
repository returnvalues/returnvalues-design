const base = require('./nuxt.config');

module.exports = Object.assign(base, {
  router: {
    base: '.',
    mode: 'hash'
  }
});
