# mall-fe
mall front code

---

### webpack对脚本的处理

* 如何解决多入口文件的问题
  * 将entry配置属性指定为对象的形式
* 多入口文件打包默认每个entry都输出一个文件, 如何解决覆盖的问题
  * ```output```的```filename```配置为```[name].js```形式, 自动打包生成多个以原js文件名为文件名的js打包文件
* 如何解决打包文件类型归类问题
  * ```filename: 'js/[name].js'```
* 引用jquery的问题
  * 采用npm安装jquery, 在文件使用的时候需要```const $ = require('jquery')```, 但是这样写每一个引用的文件都需要引用一次, 而且有的地方需要全局的jquery, 没办法使用
  * 采用全局引用cdn的形式使用[jqery cnd](http://www.bootcdn.cn/jquery)

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
  <body>

  // 引入jq
  <script type="text/javascript" src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>

  <script type="text/javascript" src="../../dist/index.js"></script>

  </body>
  </html>
  ```

 * 在上面的基础上, 如果需要模块化的方式使用jquery该怎么办呢
   * 这时候需要使用webpack配置文件中的另外一个选项

   ```javascript
        externals: {
            'jquery': 'window.jQuery'
        }
   ```
 * 怎么提出一些公共的模块
   ```javascript
     plugins: [
         // 提取公共的模块
         new webpack.optimize.CommonsChunkPlugin({
             name: 'commons',
             filename: 'js/base.js' // 这里的路径是基于output.path的
         })
     ]
   ```
 * 公共模块
   * page/common/index.js
   ```javascript
     entry: {
         'common': ['./src/page/common/index.js'], // 公共模块
         'index': ['./src/page/index/index.js'],
         'login': ['./src/page/login/index.js']
     },

     plugins: [
         // 提取公共的模块
         new webpack.optimize.CommonsChunkPlugin({
             // name: 'commons',
             name: 'common',
             filename: 'js/base.js' // 这里的路径是基于output.path的
         })
     ]
   ```

---

### webpack对样式的处理
