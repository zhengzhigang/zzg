
// 接口代理配置
const target = 'http://localhost:4002'
module.exports = {
  '/': {
    target: target,
    ws: false,
    changeOrigin: true,
    pathRewrite: {
      '/': ''
    }
  }
}
