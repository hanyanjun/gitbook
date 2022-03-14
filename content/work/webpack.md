

## HASH 分类

- hash：此次打包的所有内容的 hash。

> hash是compilation对象计算所得，而不是具体的项目文件计算所得。所以文件修改产生新的compilation，所有的文件名都会使用相同的hash指纹    
> 这样带来的问题是，任意js文件任何一个改动都会影响另外两个文件的最终文件名。上线后，另外两个文件的浏览器缓存也全部失效。这肯定不是我们想要的结果。     

- chunkHash：每一个 chunk 都根据自身的内容计算而来。
> 比如：一个chunk 可能有多个 js 文件加 css 文件组成 ，那么 其中一个 js 文件 或者 css 文件发生更改，那么对应的该chunk中的文件的hash 都会发生变化；    

- contentHash：由 css 提取插件提供，根据自身内容计算得来。
> 文件的变化不会引起其他文件hash更改    


## module、chunk、bundle区别
- module 项目中每个文件都可视为一个module
- chunk 例如split-chunk-plugin中可将多个文件划分为一个chunk，即多个文件或者代码片段的组合视为chunk
- 最终通过webpack对module处理，最终生成的文件为bundle

## 



不要为了设计而设计，不要过度设计；
需求驱动设计，设计驱动开发，开发为业务服务；
要考虑时间可行性，技术可行性；


围绕业务；
不要过度设计；
考虑时间，成本等；