
// 接口代理配置
const target = 'http://localhost:4002'
module.exports = {
  '/api': {
    target: target,
    ws: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }
}
