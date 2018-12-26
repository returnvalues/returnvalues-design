import vue from 'rollup-plugin-vue';

export default {
  entry: 'src/index.js',
  plugins: [vue()],
  output: {
    file: 'build/index.js',
    format: 'esm'
  }
};
