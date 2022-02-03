

## setState 和 batchUpdate

哪些能命中 batchUpdate 机制
- 生命周期（和它调用的函数）
- React 中注册的事件（和它调用的函数）
- React 可以 '管理' 的入口

哪些不能命中 batchUpdate 机制
- setTimeout setInterval 等 （和它调用的函数）
- 自定义的DOM事件（和它调用的函数）
- React "管不到" 的入口

![setState](../../assets/react/setState.jpg)  

batchUpdate 过程大概

![batchUpdate](../../assets/react/batchUpdate.jpg)  
![batchUpdate](../../assets/react/batchUpdate1.jpg)  


## React transaction 事务机制
> 主要是为 batchUpdate服务

transaction 大致过程
![transaction](../../assets/react/transation.jpg)  
![transaction](../../assets/react/transationmock.jpg)  

该方式存在哪些问题?
![问题](../../assets/react/wenti.jpg)  

如何解决？（通过fiber）
![Fiber](../../assets/react/fiber.jpg)  


## React Fiber

 