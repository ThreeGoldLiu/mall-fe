// 引入webpack变量
const webpack = require('webpack');
const config = {
    // entry: './src/page/index/index.js',

    // 解决多页面入口文件的问题
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        path: './dist/',
        // filename: 'app.bundle.js'

        // 解决多入口文件打包覆盖的问题
        // filename: '[name].js'

        filename: 'js/[name].js'
    },

    externals: {
        'jquery': 'window.jQuery'
    },

    plugins: [
        // 提取公共的模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/base.js' // 这里的路径是基于output.path的
        })
    ]
}
module.exports = config;