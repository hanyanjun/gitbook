###### 模块化 amd cmd
> amd require.js  依赖前置
> cmd sea.js    依赖就近

###### js中 defer async
> 都是异步执行js 的方式； 
> defer : 立即下载 异步执行；（页面加载后执行）（DomContentLoaded）
> async : 异步下载 异步执行；（页面加载后执行）（DomContentLoaded）

###### JSON.stringify

- undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化
- undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
- undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined
- NaN 和 Infinity 格式的数值及 null 都会被当做 null

###### js ==
- null undefined 相等
- 一方为boolean ， boolean 转化为数字；
- 一方为数字 ， 另一方转化为数字；
- 都为字符串，字符串比较；
- 一方为对象，另一个不是，调用对象valeOf 方法获取基本类型值后进行对比；
- 两方都为对象，比较对应内存地址是否相同；


>[参考链接](https://segmentfault.com/a/1190000021230185)
