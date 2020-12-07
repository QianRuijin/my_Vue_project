const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/data'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('style', path.join(__dirname, './src/assets/styles'))
      .set('@', path.join(__dirname, './src/'))
      .set('common', path.join(__dirname, './src/common'))
  }
}
