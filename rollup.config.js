import vue from 'rollup-plugin-vue';
import fs from 'fs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

if (!fs.existsSync('build')) fs.mkdirSync('build');
fs.writeFileSync('./build/package.json', JSON.stringify(pkg, null, '  '));

export default {
  entry: 'src/index.js',
  plugins: [vue(), terser({ sourcemap: false }), postcss()],
  output: {
    file: 'build/index.js',
    format: 'esm'
  }
};
