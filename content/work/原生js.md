###### 模块化 amd cmd
> amd require.js  依赖前置
> cmd sea.js    依赖就近

###### 

###### JSON.stringify

- undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化
- undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
- undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined
- NaN 和 Infinity 格式的数值及 null 都会被当做 null

> 

>[参考链接](https://segmentfault.com/a/1190000021230185)
