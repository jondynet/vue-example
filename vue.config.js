module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api/jsonserver': {
        target: 'http://localhost:3001/', // 你接口的域名
        secure: false,
        ws: true,
        changeOrigin: false,
        pathRewrite: {
          '^/api/jsonserver': ''
        }
      },
      '/api': {
        target: 'http://localhost:3000/', // 你接口的域名
        secure: false,
        ws: true,
        changeOrigin: false
      }
    }
  }
}
