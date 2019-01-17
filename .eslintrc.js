module.exports = {
  extends: [
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  plugins: ['vue'],
  rules: {
    'comma-dangle': 0,
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  },
  'globals': {
    "$": true
  }
};
