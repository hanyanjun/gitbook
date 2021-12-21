#### 开发流程

- 创建 npm 项目

- 创建脚手架入口文件，最上方添加
```javascript
#!/usr/bin/env node
```
- 配置 package.json ， 添加bin 属性
```javascript
  "bin": {
    "fef": "bin/index.js"
  },
```
- 编写脚手架代码

```javascript
#!/usr/bin/env node
// 注册一个命令  fef init
const argv = require('process').argv;
const fn = require('../command')
/**
 * [
 *   'C:\\Program Files\\nodejs\\node.exe',
 *   'C:\\Users\\APUS\\AppData\\Roaming\\npm\\node_modules\\fef\\bin\\index.js',
 *    'init'
 * ]
 * */ 
let command = argv[2];

const options = argv.slice(3)

const [option , param] = options;

console.log(option , param , argv);

if(fn[command]){
    // fn[command] && fn[command]()
}else{
    console.log('请输入正确的命令');
}

// 实现参数解析  --version  和 init --name

```

- 将脚手架发布到npm


#### 使用流程
- 安装脚手架

```javascript
npm install -g  [脚手架名]
```

- 使用脚手架 




##### 教授级本地link标准流程

- 链接本地脚手架
```javascript
cd [脚手架目录]
npm link
```
- 链接本地库文件
```javascript
cd [库文件目录]
npm link
cd [脚手架目录]
npm link [库名]
```

- 取消链接本地库文件

```javascript
cd [脚手架目录]
npm unlink [库名]
cd [库文件目录]
npm unlink
```


> [!TIP|style:flat]
如果无法使用unlink 请使用： `npm rm -g [包名]` 强制解除全局软链  



> [!TIP|style:flat]
> npm link [包名] ： 将当前项目中 node_modules 下指定的库文件链接到 node 全局 node_modules 下的库文件；  
> 可使用 `npm ls -g --depth 0 ` 查看全局包列表；



