const config = {
  title: 'YJ丶',
  titleTemplate: '学习记录',
  base: '/notes/',
  outDir: '../public',
  themeConfig: {
    // // 页脚编辑链接
    // editLink: {
    //   pattern: 'https://github.com/zhuyuanji96'
    // },
    nav: [
      { text: '简介', link: '/' },
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
            { text: 'JS模块化', link: '/web-doc/module.md' }
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhuyuanji96' }]
  }
};

export default config;
