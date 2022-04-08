import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import alias from '@rollup/plugin-alias'
const path = require('path')
const resolveDir = dir => path.join(__dirname, dir)

export default {
  input: 'src/index.js', // 要打包的文件源路径（应用程序的主要入口点）
  // 同时输出多种格式
  output: [
    {
      file: 'dist/hl-utils.js', // 打包后生产的文件位置，以及文件名
      format: 'umd', // 文件的输出格式（CommonJS规范，是Node.js的官方模块化规范） amd, cjs, es, iife, umd, system
      name: 'hlUtils' // 包的全局变量名称
    },
    {
      file: 'dist/hl-utils.min.js',
      format: 'umd',
      name: 'hlUtils',
      plugins: [terser()]
    },
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    alias({
      entries: [
        { find: '@', replacement: resolveDir('src') }
      ]
    }),
    serve({
      open: true,
      port: 6222,
      contentBase: ['']
    })
  ]
}