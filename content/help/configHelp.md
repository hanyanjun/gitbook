

```
{
     "plugins": [
          "-lunr",
          "-search",
          "search-plus",
          "splitter",
          "copy-code-button",
          "expandable-chapters-small"
     ]
}
```
search-plus 让搜索支持中文，注意需要先把默认的两个插件lunr和serach禁用掉，禁用的方式就是在前面加上-号
spliter 菜单栏宽度可调节
copy-code-button 代码可以一键 copy
expandable-chapters-small 菜单栏可以折叠

- gitbook-button配置
```
{
  "plugins": [
    "github-buttons"
  ],
  "pluginsConfig": {
    "github-buttons": {
      "buttons": [{
        "user": "azu",
        "repo": "JavaScript-Plugin-Architecture",
        "type": "star",
        "size": "large"
      }, {
   
   
        "user": "azu",
        "type": "follow",
        "width": "230",
        "count": false
      }]
    }
  }
}
```
Option	Description	备注
user	GitHub username that owns the repo/Username to sponsor	必须，用户名
repo	GitHub repository to pull the forks and watchers counts	必须，仓库名
type	Type of button to show: watch, fork, sponsor, or follow	必须，4种类型之一
count	Show the optional watchers or forks count: none by default or true	可选，是否显示计数
size	Optional flag for using a larger button: none by default or large	可选，按钮大小
