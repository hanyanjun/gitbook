






## react class 组件使用

### super函数


### 绑定this方法

- this.a = this.a.bind(this)
- xxx onClick={this.a.bind(this)}
- const a = ()=> {}

### 父子通讯


### setState

#### 不可变值

> 修改state 必须通过 this.setState 去做   

如下是错误的：   
```javascript
this.state.count++;
this.setState({
    count : this.state.count
})
```


#### 同步 or 异步

- 可能是异步更新

异步  
```javascript
this.setState({
    state : this.state.count + 1
}, ()=>{
    console.log(this.state.count) //拿到最新值
})
console.log(this.state.count) //异步
```   

同步

- settimeout 中   
```javascript
setTimeout(()=>{
this.setState({
    state : this.state.count + 1
})
console.log(this.state.count) //可以获取到最新值
},0) 
```    
- 自己定义的事件函数中     
```javascript
setTimeout(()=>{
this.setState({
    state : this.state.count + 1
})
console.log(this.state.count) //可以获取到最新值
},0)
document.body.addEventListener('click',()=>{
this.setState({
    state : this.state.count + 1
})
console.log(this.state.count) //可以获取到最新值
})
```  

- 可能会被合并   

```javascript
this.setState({
    state : this.state.count + 1
})
this.setState({
    state : this.state.count + 1
})
this.setState({
    state : this.state.count + 1
})
```   
![NOTE]
> 会合并只会加1次，因为相加之前拿到的都是同一次值，类似于 Object.assign({count : 1},{count: 1},{count : 1})    




```javascript
this.setState((preState)=>{
    return {count : preState.count + 1}
})
this.setState((preState)=>{
    return {count : preState.count + 1}
})
this.setState((preState)=>{
    return {count : preState.count + 1}
})
```   
![NOTE]
> 不会被合并，会相加三次   


### React事件和DOM事件

![DANGER|style:flat]    
> - event 是 React 封装的 。 _proto_.constructor 是 SyntheticEvent  
> - SyntheticEvent 模拟出来 DOM 事件所有能力     
> - event事件都会挂在到 document 上    

获取原生对象的方法
 - event.nativeEvent
> event.nativeEvent.target 是触发事件元素   
> event.nativeEvent.current.target 是绑定事件的元素     


### 组件生命周期

![生命周期1](../../assets/react/lifecycle.png)
![生命周期2](../../assets/react/lifecycle1.png)



## HOC组件

应用场景
- 生命周期劫持（日志，打点，性能分析）
- 公共逻辑抽取
- 条件渲染

实现方式
- 属性代理 
- 反向继承







## 参考文章

- [React高阶组件(HOC)的入门📖及实践](https://juejin.cn/post/6844904050236850184)
- [详解React生命周期(包括react16最新版)](https://www.jianshu.com/p/514fe21b9914)
- [生命周期图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
