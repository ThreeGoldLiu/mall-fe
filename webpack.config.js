// 引入webpack变量
const webpack = require('webpack');

// 引入css单独打包的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    // entry: './src/page/index/index.js',

    // 解决多页面入口文件的问题
    entry: {
        'common': ['./src/page/common/index.js'], // 公共模块
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
            // name: 'commons',
            name: 'common',
            filename: 'js/base.js' // 这里的路径是基于output.path的
        }),
    ],
}
module.exports = config;