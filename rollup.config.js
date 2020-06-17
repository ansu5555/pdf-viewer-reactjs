import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/pdf-viewer-reactjs.js',
        format: 'cjs',
    },
    external: [
        'react',
        'prop-types',
        'jquery',
        'material-design-icons',
        'bootstrap',
        'bulma',
        'bulma-helpers',
        'popper.js',
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        uglify(),
    ],
}
