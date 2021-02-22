import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/pdf-viewer-reactjs.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types', 'material-design-icons', 'bulma'],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: '/node_modules/',
    }),
    terser(),
  ],
}
