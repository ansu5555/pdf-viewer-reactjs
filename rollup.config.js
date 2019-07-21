import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

let pkg = require('./package.json');
let externalPkg = Object.keys(pkg.dependencies);
export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: externalPkg,
  plugins: [
    postcss({
      modules: false
    }),
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
