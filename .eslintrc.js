module.exports = {
  extends: [
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  plugins: ['vue'],
  rules: {
    'comma-dangle': 0,
    'import/no-unresolved': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  'globals': {
    "$": true
  }
};
