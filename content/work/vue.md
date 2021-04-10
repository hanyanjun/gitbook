
## vue使用知识点

### vue父子组件的生命周期调用顺序

> [!NOTE|style:flat]
> 初始化组件时  
> created(父) -> created(子) -> mounted(子) -> mounted ->(父)   

---

> [!DANGER|style:flat]
> 更新组件时  
> beforeUpdate(父) -> beforeUpdate(子) -> updated(子) -> updated(父)


### vue 生命周期对应事情
- beforeCreated
> 初始化 events、lifecycle 等
- created
> init props、data、watcher、methods、computed 数据监听，dep添加
- beforeMounted
> complie 生成 render 函数
- mounted
> 调用render生成vNode, 数据订阅,path生成dom

 - [参考](https://ustbhuangyi.github.io/vue-analysis/v2/components/lifecycle.html)
### vue组件更新之后获取最新DOM


> [!NOTE|style:flat]
> 通过this.$nexttick获取

### 动态组件
```vue
<template>
<component :is="baseCom"/>
</template>

<script>
import a from xxx
export default {
    components : {
        comName : a
    },
    data(){
        baseCom : "comName"
    }
}
</script>
```

### 异步组件
```vue
<template>
<Com v-if={showCom}/>
<button  @click={changeCom}/>
</template>

<script>
export default {
    components : {
        Com : ()=> import(xxx)
    },
    data(){
        showCom : false
    },
    methods : {
        changeCom(){
            this.data.showCom = true
        }
    }
}
</script>
```

### vue如何缓存组件

> 如果无keep-alive 每次切换状态会触发组件的destoryed和mounted方法，而加上后组件被缓存，mounted只会触发一次，destoryed不会触发       
> v-show 通过css 属性来进行组件缓存，keep-alive通过组件类缓存

```vue
<template>
<button @click="changeStatus('a')" />
<button @click="changeStatus('b')" />
<button @click="changeStatus('c')" />
<keep-alive>
<A v-if="status === a"/>
<B v-if="status === b"/>
<C v-if="status === c"/>
<keep-alive/>
</template>

<script>
import A from "xxx"
import B from "xxx"
import C from "xxx"
export default {
    components : {
        A,B,C
    },
    data(){
        status : ''
    },
    methods : {
        changeStatus(status){
            this.data.status = status
        }
    }
}
</script>
```

### mixin

- mixin.js

```vue
<template>

</template>
<script>
export default {
    data(){
        return {
            city : '北京'
        }
    },
    mounted(){
        console.log('mixin mounted')
    },
    methods: {
        showName(){
            console.log(this.name)
        }
    }
}
</script>

```

- index.vue  

```vue
<template>
<div>
    <p>{{city}}</p>
    <p>{{name}}</p> 
    <button @click="showName" />
</div>
</template>

<script>
import Mixin from "xxx"
export default {
    mixins : [Mixin]
    data(){
        name : 'index'
    },
    methods : {

    }
}
</script>
```

- 优势   
> [!NOTE|style:flat]
- 逻辑复用

---

- 劣势   
> [!DANGER|style:flat]
- 变量来源不明确，不利于阅读  
- 多个mixin可能命名重复  
- 复杂度高，可能出现一对多，多对一，多对多关系



## v-for 和 v-if 优先级  

```html
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```
经过计算后：   

```javascript
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})

```

> [!TIP|style:flat]
> v-for 优先级大于 v-if,应该通过计算属性获取符合条件的list，效率更高    



## vue-router

### 路由模式
- hash

特点

- hash 变化不会触发网页跳转，即浏览器的前进、后退
- hash 变化不会刷新页面，SPA必须的特点
- hash 永远不刽提交到serve端（前端控制，自生自灭）

```javascript

/**
 * hash变化包括
 * 1. js 修改url
 * 2. 手动修改 url 的 hash
 * 3. 浏览器前进后退
 * */ 
window.onhashchange = (event) => {
    console.log('old url' , event.oldURL)
    console.log('new url' , event.newURL)

    console.log('hash:',location.hash)
}

// 页面初次加载获取hash
document.addEventListener('DOMContentLoaded',()=>{
    console.log('hash:',location.hash)
})


```

- history

核心api
- history.pushState
- window.onpopstate

```javascript

// 监听浏览器前进后退
window.onpopstate = (event) => { 
    console.log('onpopstate' , event.state,location.pathname)
}

// 页面初次加载获取hash
document.addEventListener('DOMContentLoaded',()=>{
    console.log('hash:',location.pathname)
})

document.getElementById('btn').addEventListenter('click',()=>{
    const state = {name : 'page1'}
    history.pushState(state, '' , 'page1');
})

```


### 路由配置
- 动态路由

```javascript
routes : [
    {path : 'user/:id' , component : User}
]
```
- 路由懒加载

```javascript
routes : [
    {path : 'user/:id' , component : ()=> import("../../user.vue")}
]
```
