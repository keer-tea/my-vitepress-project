---
# sidebar: false
# navbar: false
# aside: false
---

# 书写 md 文档


## 标题自带锚点

## 跳转 md 页面，或打开外部链接

[我要跳到准备环境页](./准备环境)

## 我们可以通过 frontmatter 来配置页面

## 使用 github 风格的表格

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 渲染表情

:100:
:grin:

❤️

## 大纲

[[toc]]


## vitepress 的默认容器

::: info
我是容器的内容
:::

::: info
灰色边框包裹起来的区域
:::

::: tip
绿色边框包裹起来的区域
:::

::: warning
黄色边框包裹起来的区域
:::

::: danger
红色边框包裹起来的区域
:::

::: details
可以展开收缩的区域
:::

## 自定义容器标题

::: danger 特别小心！
禁止吸烟
:::

## 高亮代码块

```
const a = 123;
```

```js
const a = 123;
```

## 设置代码块颜色主题  
rc-10 版本有 bug，白天模式下代码块颜色设置不正常。

我们可以高亮代码块，让代码变得五颜六色。在 vitepress 中，也可以像 vscode 设置主题一样，设置代码块的颜色主题。

我们可以通过 vitepress 的 markdown.theme 配置项配置代码块的颜色主题：
```ts
export default {
  markdown: {
    theme: 'dark-plus',
  },
}
```

## 代码块中的行高亮

```js{1}
const a = 1;
const b = 1;
const c = 1;
```

```js{1,2,3}
const a = 1;
const b = 1;
const c = 1;
```

```js{1-3}
const a = 1;
const b = 1;
const c = 1;
```

## 代码块聚焦

```js
const a = 123;
const a = 123;
const a = 123; // [!code focus]
const a = 123;
const a = 123;// [!code focus]
const a = 123;
```
## 代码块对比

```js
const a = 123;
const a = 123;
const a = 123; // [!code ++]
const a = 123; // [!code --]
const a = 123;
const a = 123;
```

## 代码块警告和错误
```js:no-line-numbers
const a = 123; // [!code warning]
const a = 123;
const a = 123;
const a = 123; 
const a = 123;
const a = 123; // [!code error]
```

## 开启显示代码块行号
我们可以在配置文件中配置，每个 md 文档的代码块都显示或隐藏行号。通过如下配置项配置：
```ts
export default {
  markdown: {
    lineNumbers: true
  }
}
```
但是还有其他方式可以配置代码块行号的显示与隐藏。

比如，在代码块的第一个三反引号的编程语言别名后面紧接着冒号加 `line-numbers` 或紧接着冒号加 `no-line-numbers`，像下面这样：
````
```js:line-numbers
const a = 1;
```

<!-- 或者 -->

```js:no-line-numbers
const b = 2;
```
````
比如，我们让下面的代码块显示行号。

```js:line-numbers
const a = 123;
```

这样，我们就知道了有两种方法来控制代码块行号的显示与隐藏。可以在配置文件里配置，也可以在代码块的编程语言别名后面配置，后者的配置会覆盖配置文件里的配置。

## 导入代码片段，并用代码块包裹起来

<<< @/temp.js

<<< ./temp.js

<<< @/temp.js#xyz

## 代码分组

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## Markdown 文件中包含 Markdown 文件

<!--@include: ./temp.md-->
