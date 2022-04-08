import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js', // 要打包的文件源路径（应用程序的主要入口点）
  output: { // 文件输出配置
    file: 'dist/hl-utils.js', // 打包后生产的文件位置，以及文件名
    format: 'umd', // 文件的输出格式（CommonJS规范，是Node.js的官方模块化规范） amd, cjs, es, iife, umd, system
    name: 'hlUtils' // 包的全局变量名称
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
  ]
}