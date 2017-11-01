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
        filename: '[name].js'
    }
}
module.exports = config;