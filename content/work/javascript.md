
## 模块化：amd、cmd
> [!NOTE|style:flat]
> amd require.js  依赖前置

---

> [!NOTE|style:flat]
> cmd sea.js    依赖就近

## js中 defer async

> [!NOTE|style:flat]
> 都是异步执行js 的方式；   
> defer : 立即下载 异步执行；（页面加载后执行）（DomContentLoaded）   
> async : 异步下载 异步执行；（页面加载后执行）（DomContentLoaded）   

## JSON.stringify

> [!NOTE|style:flat]
- undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化
- undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null
- undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined
- NaN 和 Infinity 格式的数值及 null 都会被当做 null

## js==判断逻辑

> [!NOTE|style:flat]
- null undefined 相等
- 一方为boolean ， boolean 转化为数字；
- 一方为数字 ， 另一方转化为数字；
- 都为字符串，字符串比较；
- 一方为对象，另一个不是，调用对象valeOf 方法获取基本类型值后进行对比；
- 两方都为对象，比较对应内存地址是否相同；

## 深拷贝

- 递归

> [!DANGER|style:flat]
> 会产生栈溢出
- 保存遍历的对象，遍历时若对象被保存，则直接返回    

- JSON.parse、JSON.stringify

> [!DANGER|style:flat]
> 会对部分对象属性过滤     

- 采用循环

```javascript 
var a = {
    a1: 1,
    a2: {
        b1: 1,
        b2: {
            c1: 1
        }
    }
}
function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({        
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}
```   


- 采用循环&缓存对象  

```javascript
// 保持引用关系
function cloneForce(x) {
    // =============
    const uniqueList = []; // 用来去重
    // =============

    let root = {};

    // 循环数组
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }
        
        // =============
        // 数据已经存在
        let uniqueData = find(uniqueList, data);
        if (uniqueData) {
            parent[key] = uniqueData.target;
            break; // 中断本次循环
        }

        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
            source: data,
            target: res,
        });
        // =============
    
        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}

function find(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }

    return null;
}
```  


## 内存泄漏 栈溢出  

- 内存泄漏
> 垃圾回收机制无法回收变量，导致内存逐渐积累到达瓶颈即为内存溢出或者内存泄漏       

> [!NOTE|style:flat]
> 常见内存泄漏
- 全局变量过多
- 闭包
- dom添加属性或者方法不及时解除引用

- 栈溢出
> 入栈太多，出栈太慢，栈内存被占满   

> [!NOTE|style:flat]
> 常见栈溢出
- 递归导致变量无法释放，下次的递归依赖上次的栈中变量      


```javascript
function isEven (num) {
    if (num === 0) {
        return true;
    }
 
    if (num === 1) {
        return false;
    }
 
    return isEven(Math.abs(num) - 2);返回值调用isEven()导致上次的isEvent中的变量，返回值等无法释放，最后导致堆栈溢出
}
```


## 参考文章
- [你不知道的 JSON.stringify() 的威力](https://segmentfault.com/a/1190000021230185)
- [深拷贝的终极探索（99%的人都不知道）](https://segmentfault.com/a/1190000016672263)
- [JavaScript之内存溢出和内存泄漏](https://cloud.tencent.com/developer/article/1619971)
