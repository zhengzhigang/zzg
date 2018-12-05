const proxyTable = require('./config/proxy')

module.exports = {
    assetsDir: 'assets',
    devServer: {
        port: 3112,
        proxy: proxyTable
    }
}