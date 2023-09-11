# 在 markdown 中使用 vue


在 vitepress 中，每个 markdown 文件都会作为一个 vue 单文件组件被处理。你可以使用 vue 的动态模板功能，使用 vue 组件，通过添加 `<script>` 标签书写任意 vue 逻辑。


## 使用模板语法

像下面这样子使用模板语法：
```
{{ 1 + 1 }}
```
示例：1 + 1 = {{ 1 + 1 }}

## 使用指令

像下面这样子使用指令：
```
<span v-for="i in 3">{{ i }}</span>
```
示例：

<div v-for="i in 3">
  <span>{{ i }}</span>
</div>

## 使用 `<script>` 和 `<style>` 标签


<script setup>
import { ref } from 'vue'
import demo from './components/demo.vue'

const count = ref(0)

const a = 1;
const b = 2;
</script>

<div :class="$style['a-button']" @click="count++">Increment</div>

记数：{{ count }}

<style module>
.a-button {
  border: 1px solid red;
}
</style>

## 使用 vue 组件

<demo />

## 阻止 vue 解析渲染
我们可以通过给标签添加 `v-pre` 指令来禁止 vue 解析渲染。也可以使用 `v-pre` 容器，禁止 vue 解析渲染容器内的内容。

<!-- ```md
This <span v-pre>{{ will be displayed as-is }}</span>
```
或者
```md
::: v-pre
{{ This will be displayed as-is }}
:::
``` -->

This <span v-pre>{{ will be displayed as-is }}</span>

::: v-pre
{{ This will be displayed as-is }}
:::

## 让 vue 解析代码块里的内容

```js-vue
const a = 1;
const b = 2;
const c = {{ a + b }}
```

## 使用 css 预处理器

如果我们想要使用 css 预处理器，只需要下载相应的 css 预处理器包就行了。可选择下载这些 css 预处理器包：sass、less、stylus。

```shell
# .scss and .sass
npm install -D sass

# .less
npm install -D less

# .styl and .stylus
npm install -D stylus
```

下载完成后，就可以使用了。只需要在 `<style></style>` 标签中指定 lang 属性：
````vue
<style lang="scss">
.title {
  font-size: 20px;
  .a {
    color: red;
  }
}
</style>
````