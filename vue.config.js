const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // baseUrl:'/kla',
    baseUrl:'/',
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {
        port: 8989
    }
}