<!-- toc -->

## vue使用知识点

### vue父子组件的生命周期调用顺序

> [!NOTE|style:flat]
> 初始化组件时  
> created(父) -> created(子) -> mounted(子) -> mounted ->(父)


> [!TIP|style:flat]
> 更新组件时  
> beforeUpdate(父) -> beforeUpdate(子) -> updated(子) -> updated(父)


### vue组件更新之后获取最新DOM


> [!TIP|style:flat]
> 通过this.$nexttick获取

### 动态组件
```
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
```
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

```
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

```
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

```

- index.vue  

```
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

> [!TIP|style:flat]
- 优势
> 逻辑复用

> [!DANGER|style:flat]
- 劣势
> 变量来源不明确，不利于阅读  
> 多个mixin可能命名重复  
> 复杂度高，可能出现一对多，多对一，多对多关系





## vue-router

### 路由模式
- hash

- history

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


## diff算法相关



<!-- endtoc -->