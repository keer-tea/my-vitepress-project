# 配置 footer

我们可以在 .vitepress/config/index.ts 里配置一下：
```ts
export default defineConfig({
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present',
    },
  }
})
```
看一下页面效果，发现底部已经有我们配置的 footer 信息了。