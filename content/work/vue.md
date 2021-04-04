`<!-- toc -->`


## 1.vue使用知识点

### 1.1vue父子组件的生命周期调用顺序

```javascript
/**
 * 初始化组件时
 * */ 
// created(父) -> created(子) -> mounted(子) -> mounted ->(父)

/**
 * 更新组件时
 * */ 
// beforeUpdate(父) -> beforeUpdate(子) -> updated(子) -> updated(父)

```

### 1.2vue组件更新之后获取最新DOM

> 通过this.$nexttick获取

### 1.3动态组件
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

### 1.4异步组件
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

## 1.5vue如何缓存组件



