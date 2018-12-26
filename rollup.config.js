import vue from 'rollup-plugin-vue';
import fs from 'fs';
import pkg from './package.json';

if (!fs.existsSync('build')) fs.mkdirSync('build');
fs.writeFileSync('./build/package.json', JSON.stringify(pkg, null, '  '));

export default {
  entry: 'src/index.js',
  plugins: [vue()],
  output: {
    file: 'build/index.js',
    format: 'esm'
  }
};
