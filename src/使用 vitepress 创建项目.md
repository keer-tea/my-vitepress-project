# 使用 vitepress 创建项目
现在正式进入学习 vitepress 的大门。

我们在自己喜欢的一个地方新建一个文件夹，在控制台中先执行下面这个命令：

```Bash
npm init -y
```

然后执行命令：

```Bash
npm install -D vitepress --registry=https://registry.npmmirror.com
```
这时候目录下已经有三个文件（夹）了：package.json、package-lock.json、node_modules。

然后我们在目录下创建一个名为 .gitignore 的文件，并且写入如下内容，不要让 git 跟踪它们，因为对它们进行版本管理实在是没有必要。

```txt
node_modules
cache
dist
```

然后再在目录下创建一个名为 index.md 的文件，随便写入一些内容：
```md
你好，vitepress
```
再创建 .vitepress 目录，并在该目录下创建 config 目录。然后在 config 目录下创建 index.ts 文件。

为什么要用 ts 文件呢？因为 vitepress 是基于 vite 开发的，而 vite 天生就能识别 ts 文件，所以不需要过多的配置就能使用 ts 文件，而且 ts 对我们后面的配置会有更好的类型提示，便于扩展维护。

然后对 .vitepress/config/index.ts 写入如下内容，进行最基础的配置：
```ts
import { defineConfig  } from 'vitepress'
export default defineConfig({
  // site-level options
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options
  }
})
```
此时，我们的目录结构应该长下面这样子：

```
vitepress-project
├── .gitignore
├── .vitepress
│   └── config
│       └── index.ts
├── index.md
├── package-lock.json
└── package.json
```
然后我们修改 package.json 的 scripts 字段，变成如下：

```JSON
{
  "name": "vitepress-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vitepress": "^1.0.0-rc.4"
  }
}
```
然后在控制台中执行命令：

```Bash
npm run dev
```
将会发现控制台报错。我们点进控制台提示的报错，发现有两种办法可以解决问题，我们就直接使用第一种吧。

1. adding `"type": "module"` to the nearest `package.json`
2. renaming `vite.config.js`/`vite.config.ts` to `vite.config.mjs`/`vite.config.mts`


改完之后，我们再次重新启动，将会看到控制台启动了一个 `http://localhost:5173` 的服务，在浏览器中访问该服务，就可以看到内容了。

我们可以改一改配置文件中的 title 字段，发现页面的左上角和浏览器标签的标题都会跟着改变。说明这个配置可以设置页面的左上角和浏览器标签的标题。

到此，我们就创建出了一个最基础的 vitepress 的项目。后面我们将在它的基础上一步步扩展，让项目的功能变得丰富起来。
