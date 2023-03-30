import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'YJ丶',
  titleTemplate: '学习记录',
  outDir: '../public',
  themeConfig: {
    // // 页脚编辑链接
    // editLink: {
    //   pattern: 'https://github.com/zhuyuanji96'
    // },
    nav: [
      { text: '简介', link: '/' },
      { text: '站点传送', link: '/nav-link/index.md' },
      // {
      //   text: '知识梳理',
      //   items: [
      //     {
      //       items: [
      //         { text: '基础知识', link: '/web-base/' },
      //         { text: '浏览器与网络', link: '/web-doc/' }
      //       ]
      //     }
      //   ]
      // },
      { text: '知识梳理', link: '/web-doc/' },
      { text: '学习博客', link: '/study-blog/' },
      { text: '奇淫技巧', link: '/trick-list/' },
      { text: '踩坑日记', link: '/diary-pit/' }
    ],
    sidebar: {
      '/web-doc/': [
        {
          text: 'JS知识点',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '数据类型', link: '/web-doc/js-types.md' },
            { text: '类型转换', link: '/web-doc/js-conversions.md' },
            { text: 'ES6常用知识点', link: '/web-doc/es6.md' },
            { text: 'JS基础API介绍&实现', link: '/web-doc/js-base-api.md' },
            { text: 'JS模块化', link: '/web-doc/module.md' },
            { text: 'JS原型、原型链', link: '/web-doc/js-prototype' },
            { text: 'JS装饰器', link: '/web-doc/js-decorator' },
            { text: 'JS设计模式', link: '/web-doc/js-design-pattern' },
            { text: 'JS异步解决方案', link: '/web-doc/js-async-await' }
          ]
        },
        {
          text: 'HTML/CSS',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'HTML', link: '/web-doc/html.md' },
            { text: '页面渲染方式', link: '/web-doc/page-rendering.md' }
          ]
        },
        {
          text: '浏览器与网络',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '浏览器基础知识点', link: '/web-doc/browser-base.md' },
            { text: 'HTTP', link: '/web-doc/http.md' },
            { text: 'TCP', link: '/web-doc/tcp.md' }
          ]
        }
      ],
      '/study-blog/': [
        {
          text: '前端大杂烩',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'TS内置类型', link: '/study-blog/ts-built-in-type' },
            { text: 'TS拓展语法', link: '/study-blog/ts-extend' },
            { text: 'Vite3实现H5多入口打包', link: '/study-blog/vite3-h5' }
          ]
        },
        {
          text: '不仅仅是前端',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'git常用指令', link: '/study-blog/git-command' },
            { text: 'npm常用指令', link: '/study-blog/npm-command' },
            { text: 'vsCode配置', link: '/study-blog/vscode-config' },
            { text: 'Zsh命令行工具', link: '/study-blog/zsh' },
            { text: '浏览器扩展整理', link: '/study-blog/browser-extend' },
            { text: '网页工具整理', link: '/study-blog/utils-network' }
          ]
        }
      ],
      '/trick-list/': [
        {
          text: '常用工具方法',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '工具函数整理', link: '/trick-list/utils-function.md' },
            { text: '高频正则整理', link: '/trick-list/utils-regexp.md' },
            { text: '三方工具库整理', link: '/trick-list/utils-library.md' }
          ]
        },
        {
          text: 'CSS记录与技巧',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'CSS记录文档', link: '/trick-list/css-record.md' },
            { text: 'CSS使用技巧', link: '/trick-list/css-trick.md' },
            { text: 'Sass记录文档', link: '/trick-list/sass-record.md' }
          ]
        }
      ],
      '/diary-pit/': [
        {
          text: '前端踩坑日记',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'H5-JS坑位', link: '/diary-pit/h5-js' },
            { text: 'PC-CSS坑位', link: '/diary-pit/pc-css' }
          ]
        }
      ]
    },
    algolia: {
      appId: 'WURVWK9X9S',
      apiKey: 'bb5efd6d46de48998ad214e90ecdb35e',
      indexName: 'zhuyuanji96io',
      placeholder: '搜索',
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhuyuanji96' }]
  },
  plugins: []
});
