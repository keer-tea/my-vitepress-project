# 介绍 vitepress 的布局-home 1
vitepress 的布局分为 3 种。哪三种呢？分别是 home、doc、page 布局。如果没有指定布局，那么布局默认为 doc。

这几种布局有什么异同呢？

home 布局会有一个模板，我们可以通过 frontmatter 来进行配置。它没有侧边栏，大纲功能。文档内容也没有默认样式。

doc 布局会自动开启侧边栏，大纲功能，文档内容有默认样式。

page 布局与 doc 布局类似，只是文档内容没有默认样式，也没有大纲功能。

我们现在项目启动后的首页，就是资源目录下的 index.md 文件。它的布局现在为 doc 布局。我们现在先不讲 doc 布局，而先讲 home 布局。

接下来，我们将资源目录下的 index.md 文件改为 home 布局，并进行一些配置。

因为 home 布局会提供一个模板，所以我们先去掉 index.md 原有的内容，使用模板来配置页面内容就可以了。

怎么改为 home 布局呢？通过设置 frontmatter.layout 为 home 就可以了。

frontmatter 就是一组用三个横线包裹起来的区域，可以在里面写键值对，配置页面如何展示，开启哪些功能。

在 index.md 中写入如下内容，页面就变成 home 布局了。
```md
---
layout: home
---
```
此时我们看到页面只有导航栏，其它都是空白。现在我们看瞅瞅 vitepress 的官网，介绍一下 home 布局下的组成元素。

打开网址 https://vitepress.dev/，映入眼前的就是布局为 home 的首页。

home 布局分为 hero、features 部分。

hero 部分可以配置 name、text、tagline、image、actions。

features 部分可以配置 icon、title、details。

下面我们一个个的来配置：

hero.name：
```md
---
layout: home
hero:
  name: vitepress 教程
---
```
可以发现页面左上角部分显示出比较大的蓝色字体，名称与 hero.name 一致。

hero.text：
```md
---
hero:
  text: 通过文章记录知识
---
```
可以发现在 hero.name 下面，显示出了比较大的黑色字体，名称与 hero.text 一致。

hero.tagline：
```md
---
hero:
  tagline: 星星之火，可以燎原
---
```
可以发现在 hero.text 下面，显示出了较小的浅灰色字体，名称与 hero.tagline 一致。

接下来配置 image，图片的来源可以是网络链接图片，也可以是本地的图片。在这里我们使用本地的图片。将我桌面上的 logo.png，复制到项目的资源目录下的 public 目录下。为什么要放到 public 目录下呢？后面再解释。

然后配置 hero.image.src
```md
hero:
  image:
    src: /logo.png
```
我们还可以配置该图片的 alt 属性：
```md
hero:
  image:
    src: /logo.png
    alt: rose
```

可以看到页面右上角部分有一朵玫瑰花，说明配置成功了。