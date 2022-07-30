const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/frontend-developer-test/' : '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/css/variables.scss";'
      }
    }
  }
})
