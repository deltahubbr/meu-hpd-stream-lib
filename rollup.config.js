import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*', 'playground/src/component-lib'] }),
      typescript(),
      json({
        // All JSON files will be parsed by default,
        // but you can also specifically include/exclude files
        // include: 'node_modules/**',
        // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
   
        // for tree-shaking, properties will be declared as
        // variables, using either `var` or `const`
        preferConst: true, // Default: false
   
        // specify indentation for the generated default export —
        // defaults to '\t'
        // indent: '  ',

        // ignores indent and generates the smallest code
        compact: true, // Default: false
   
        // generate a named export for every property of the JSON object
        // namedExports: true // Default: true
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];