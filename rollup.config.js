import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  external: [
    'react',
    'react-dom',
    'prop-types',
    'material-design-icons',
    'bulma',
  ],
  input: 'src/index.js',
  output: {
    file: 'dist/pdf-viewer-reactjs.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [
    peerDepsExternal(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
}
