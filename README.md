# mall-fe
mall front code

---

### webpack对脚本和样式的处理

* 如何解决多入口文件的问题
  * 将entry配置属性指定为对象的形式
* 多入口文件打包默认每个entry都输出一个文件, 如何解决覆盖的问题
  * ```output```的```filename```配置为```[name].js```形式, 自动打包生成多个以原js文件名为文件名的js打包文件
* 如何解决打包文件类型归类问题
  * ```filename: 'js/[name].js'```
* 引用jquery的问题