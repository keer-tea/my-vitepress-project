# 介绍 vitepress 的布局-home 2
接下来继续配置 hero 部分。hero 部分还可以配置 actions。actions 是一个数组。actions 在页面上的表现就是按钮。一个按钮可以配置的属性有 theme，text。

theme 属性用来配置按钮的背景颜色，text 属性用来设置按钮内的文本。

光说可能有点懵，下面我们来配置一下：
```md
hero:
  actions:
    - theme: brand
      text: 按钮一
    - theme: alt
      text: 按钮二
```
theme: brand 表现为蓝色背景按钮。

theme: alt 表现为浅灰色背景按钮。

当然这些颜色都是默认的，如果想要自己自定义设置，也是可以的。后面会讲到。

到此，我们的 hero 部分就配置完了。



接下来，我们配置 features 部分。features 也是一个数组，也可以配置多个。一个 feature 可以配置的属性有 icon，title，details。分别指什么意思呢？我们去 vitepress 官方文档的首页去看看。

看完之后，再进行配置 features。
```md
features:
  - icon: 📝
    title: 专注与你的内容
    details: 用 markdown 有效的创建漂亮的文档
```
icon 可以是字体图标，也可以是 svg 标签。

svg 图标可以在这个网站中搜索并复制使用：https://icon-sets.iconify.design/


让我们多配置几个 feature，像下面这样：
```md
features:
  - icon: 📝
    title: 专注与你的内容
    details: 用 markdown 有效的创建漂亮的文档
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><defs><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>
    title: 享受 vite 的开发体验
    details: 服务瞬间启动，闪电般热更新，共享 vite 生态插件
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: 使用 Vue
    details: 在 markdown 中直接使用 Vue 语法，或使用 Vue 构建自定义主题
  - icon: 🚀
    title: 访问速度迅速
    details: 使用 HTML 快速初始化加载，快速的客户端预加载
```

到这里，hero 和 feature 都配置好了。但他们还有一些其它的配置，比如跳转链接，后面我们会再进行一下配置。
