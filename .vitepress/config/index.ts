import { defineConfig  } from 'vitepress'
export default defineConfig({
  // site-level options
  lang: 'zh-CN',
  title: '--VitePress--',
  description: 'Just playing around.',
  srcDir: 'src',
  base: '/vitepress-course/',
  head: [
    [
      // 配置浏览器标签页小图标
      'link', { rel: 'icon', href: '/logo.png', crossorigin: '' }
    ]
  ],
  // 显示每篇文章的最后提交修改时间
  lastUpdated: true,
  markdown: {
    // theme: 'dark-plus',
    lineNumbers: true
  },
  themeConfig: {
    outline: 'deep',
    outlineTitle: '文档大纲目录', // 大纲，目录
    // theme-level options
    siteTitle: 'blog and course',
    logo: '/logo.png',
    socialLinks: [
      {
        icon: 'github',
        link: ''
      },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 12l10 7.422L22 12"/><path d="m7 9l5 4l5-4m-6-3l1 .8l1-.8l-1-.8z"/></g></svg>'}, link: 'https://juejin.cn/user/1742041823325422', ariaLabel: 'my juejin' },
    ],
    sidebar: [
      {
        text: '准备环境',
        link: '/准备环境'
      },
      {
        text: '使用 vitepress 创建项目',
        link: '/使用 vitepress 创建项目'
      },
      {
        text: 'vitepress 的两个概念：项目根目录和资源目录',
        link: '/vitepress 的两个概念：项目根目录和资源目录'
      },
      {
        text: '介绍 vitepress 的布局-home-1',
        link: '/介绍 vitepress 的布局-home-1'
      },
      {
        text: 'vitepress 的静态资源处理',
        link: '/vitepress 的静态资源处理'
      },
      {
        text: '介绍 vitepress 的布局-home-2',
        link: '/介绍 vitepress 的布局-home-2'
      },
      {
        text: '配置 footer',
        link: '/配置 footer'
      },
      {
        text: '介绍 vitepress 的布局-doc ',
        link: '/介绍 vitepress 的布局-doc'
      },
      {
        text: '介绍 vitepress 的布局-page',
        link: '/介绍 vitepress 的布局-page'
      },
      {
        text: '书写 md 文档',
        link: '/书写 md 文档'
      },
      {
        text: '在 markdown 中使用 vue',
        link: '/在 markdown 中使用 vue'
      },
      {
        text: '其它配置项',
        link: '/其它配置项'
      },
      {
        text: '美化首页',
        link: '/美化首页'
      },
      {
        text: '跳转到放烟花页面',
        link: '/跳转到放烟花页面'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/准备环境'
      }
    ],
  }
})