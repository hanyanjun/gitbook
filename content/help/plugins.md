# GitBook 插件  
<!--email_off-->  
记录一些实用的插件, 如果要指定插件的版本可以使用 `plugin@0.3.1`。下面的插件在 GitBook 的 `3.2.3` 版本中可以正常工作，因为一些插件可能不会随着 GitBook 版本的升级而升级，即下面的插件可能不适用高版本的 GitBook，所以这里指定了 GitBook 的版本。另外本文记录的插件在 Linux 下都是可以正确工作的，windows 系统没有测试。这里只是列举了一部分插件，如果有其它的需求，可以到 [插件官网](https://plugins.gitbook.com/) 区搜索相关插件。
<!--/email_off-->

- [Disqus - Disqus 评论](#disqus)
- [Search Plus - 支持中文搜索](#search-plus)
- [Prsim - 使用 Prism.js 高亮代码](#prsim)
- [Advanced Emoji - 支持 emoji 表情](#advanced-emoji)
- [Github - 添加github图标](#github)
- [Github Buttons - 添加项目在 Github 上的 star、fork、watch 信息](#github-buttons)
- [Ace Plugin - 支持ace](#ace-plugin)
- [Emphasize - 为文字加上底色](#emphasize)
- [KaTex - 支持数学公式](#katex)
- [Include Codeblock - 用代码块显示包含文件的内容](#include-codeblock)
- [Splitter - 使侧边栏的宽度可以自由调节](#splitter)
- [Mermaid-gb3 - 支持渲染 Mermaid 图表](#mermaid-gb3)
- [Puml - 支持渲染 uml 图 ](#puml)
- [Graph - 使用 function-plot 绘制数学函数图](#graph)
- [Chart  - 绘制图形](#chart)
- [Sharing-plus - 分享当前页面](#sharing-plus)
- [Tbfed-pagefooter - 为页面添加页脚](#tbfed-pagefooter)
- [Expandable-chapters-small - 使左侧的章节目录可以折叠](#expandable-chapters-small)
- [Toggle-chapters - 左侧章节目录可以折叠](#Toggle-chapters)
- [Sectionx - 将页面分块显示](#sectionx)
- [GA - Google 统计](#ga)
- [3-ba - 百度统计](#3-ba)
- [Donate - 打赏插件](#donate)
- [Local Video - 使用 Video.js 播放本地视频](#local-video)
- [Simple-page-toc - 自动生成本页的目录结构](#simple-page-toc)
- [Anchors - 添加 Github 风格的锚点](#anchors)
- [Anchor-navigation-ex - 添加Toc到侧边悬浮导航以及回到顶部按钮](#anchor-navigation-ex)
- [Edit Link - 链接到当前页源文件上](#edit-link)
- [Sitemap-general - 生成sitemap](#sitemap-general)
- [Favicon - 更改网站的 favicon.ico](#favicon)
- [Todo - 添加 Todo 功能](#todo)
- [Terminal - 模拟终端样式](#terminal)
- [Copy-code-button - 为代码块添加复制按钮](#copy-code-button)
- [Alerts - 添加不同 alerts 样式的 blockquotes](#alerts)
- [Include-csv - 显示 csv 文件内容](#include-csv)
- [Musicxml - 支持 musicxml 格式的乐谱渲染](#musicxml)
- [Klipse - 集成 Kplise (online code evaluator)](#klipse)
- [Versions-select - 添加版本选择的下拉菜单](#versions-select)
- [Rss - 添加 rss 订阅功能](#rss)
- [Theme-comscore - 修改标题和表格颜色](#theme-comscore)
- [summary - 自动生成目录](#summary)


## prsim
[插件地址](https://github.com/gaearon/gitbook-plugin-prism)
[主题地址](https://github.com/PrismJS/prism-themes)
```json
{
  "plugins": ["prism", "-highlight"]
}
"pluginsConfig": {
  "prism": {
    "css": [
      "prismjs/themes/prism-solarizedlight.css"
    ]
  }
}
"pluginsConfig": {
  "prism": {
    "lang": {
      "flow": "typescript"
    }
  }
}
"pluginsConfig": {
  "prism": {
    "ignore": [
      "mermaid",
      "eval-js"
    ]
  }
}
```

## Copy-code-button
为代码块添加复制的按钮。

[插件地址](https://plugins.gitbook.com/plugin/copy-code-button)

```json
{
    "plugins": ["copy-code-button"]
}
```



## Simple-page-toc
自动生成本页的目录结构。另外 GitBook 在处理重复的标题时有些问题，所以尽量不适用重复的标题。
[插件地址](https://plugins.gitbook.com/plugin/simple-page-toc)  
```json
{
    "plugins" : [
        "simple-page-toc"
    ],
    "pluginsConfig": {
        "simple-page-toc": {
            "maxDepth": 3,
            "skipFirstH1": true
        }
    }
}
```
使用方法: 在需要生成目录的地方加上 &lt;!-- toc --&gt;
