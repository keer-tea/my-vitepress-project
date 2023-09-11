# vitepress 的两个概念：项目根目录和资源目录

项目根目录指的是 .vitepress 文件所在的目录。

资源目录的位置默认就是项目根目录。但是我们可以配置资源目录的路径位置。

资源目录是放置你写的 Markdown 文件的地方。资源目录下的 index.md 文件，默认会作为项目启动后的首页。

接下来，我们就配置资源目录的位置为项目根目录下的 src。这样子结构会更加清晰，方便后期维护。

设置 .vitepress/config/index.ts文件：
```ts
export default defineConfig({
  srcDir: 'src',
})
```
然后在项目根目录下新建 src 目录。再然后把项目根目录下的 index.md 移动到资源目录 src 下。重新运行命令 `npm run dev` 启动项目，再次访问 url，能看到 index.md 中的内容，说明就设置对了。

