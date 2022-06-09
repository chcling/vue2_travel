const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// 使用resolve拼接目标目录，path为项目目录，__dirname是当前文件的目录
function resolve (dir) {
  console.log(path)
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack (config) {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
  }
})
