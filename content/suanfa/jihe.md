## 集合
- 概念    
> 一种 无序且唯一 的数据结构；  
> ES6 中 Set 为集合结构；  
> 集合常用操作：去重、判断某元素是否在集合中、求交集... ... ；   

```javascript

// 去重
const arr = [1,2,12,1];
const arr2 = [...new Set(arr)];

// 判断元素是否在结合中
const set = new Set(arr);
set.has(3)

// 求交集 
const set2 = new Set([2,3]) 
const set3 = new Set([...set2].filter(item => set2.has(item)))

```  

## 前端与集合  

### Set结构 
- 常用方法     


```javascript 

let set = new Set();
set.add(1); 
set.add(5); 
set.add(5); 
set.add('some text'); 

set.has(5)

set.delete(5)  
for(let item of set)
for(let item of set.keys()) 
for(let item of set.values()) 
for(let [key,value] of set.entries())  

const arr = [...set]
const arr1  = Array.from(set) 

new Set([1,2,3,4]) 

```


## 实例题  

### 两个数组的交集   

- 题目 力扣 349 