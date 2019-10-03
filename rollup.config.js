import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import flowEntry from 'rollup-plugin-flow-entry'
import nodeResolve from 'rollup-plugin-node-resolve'
import packageJson from './package.json'
import url from 'rollup-plugin-url'

const external = [
  'regenerator-runtime/runtime',
  ...Object.keys(packageJson.dependencies).filter(
    name => name !== 'react-toolbox'
  ),
  ...Object.keys(packageJson.devDependencies)
]

export default {
  external,
  input: 'src/exports.js',
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/@material-ui/utils/node_modules/react-is/index.js': [
          'ForwardRef'
        ]
      },
      exclude: 'src/**'
    }),
    nodeResolve(),
    url(),
    babel(),
    flowEntry()
  ]
}
