export const NAV_DATA = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg',
        title: 'iconfont',
        desc: '阿里巴巴矢量图标库',
        link: 'https://www.iconfont.cn/'
      },
      {
        icon: 'data:image/png;base64,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',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      },
      {
        icon: 'https://www.processon.com/assets/images/logo_small.svg',
        title: 'processon',
        desc: '免费在线流程图思维导图',
        link: 'https://www.processon.com/'
      },
      {
        icon: 'https://www.67tool.com/avatar.png',
        title: '即时工具',
        desc: '安全、快捷、好用的在线工具箱~',
        link: 'https://www.67tool.com/'
      }
    ]
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      },
      {
        icon: 'https://reactnative.cn/img/header_logo.svg',
        title: 'React Native',
        desc: '用于构建跨端程序的 JavaScript 库',
        link: 'https://reactnative.cn/'
      },
      {
        icon: 'https://reactnative.directory/favicon-32x32.png',
        title: 'React Native Directory',
        desc: 'React Native 开发工具库 搜索平台',
        link: 'https://reactnative.directory/'
      },
      {
        icon: 'https://reactnavigation.org/img/spiro.svg',
        title: 'React Navigation',
        desc: 'Routing and navigation for Expo and React Native apps.',
        link: 'https://reactnavigation.org/'
      }
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }
    ]
  },
  // {
  //   title: 'JavaScript 框架类库',
  //   items: [
  //     {
  //       icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
  //       title: 'Svelte',
  //       desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
  //       link: 'https://svelte.dev'
  //     },
  //     {
  //       icon: 'https://simpleicons.org/icons/jquery.svg',
  //       title: 'jQuery API 中文文档',
  //       desc: '一个兼容多浏览器的 JavaScript 框架',
  //       link: 'https://jquery.cuishifeng.cn'
  //     }
  //   ]
  // },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: 'https://cdn.docschina.org/home/logo/taro.png',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: 'https://nodejs.org/static/images/logo.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com'
      },
      {
        icon: 'https://github.com/koajs/koa/raw/master/docs/logo.png',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koa.bootcss.com/#'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      }
    ]
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN/'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LUnu_P6Tg0JH1W1a3PJXq0wHONNYJPi5cA&usqp=CAU',
        title: 'Netlify',
        desc: '使用任何前端框架从 Git 构建、预览和部署到我们的全球网络。',
        link: 'https://app.netlify.com/'
      }
    ]
  },
  {
    title: '前端学习资料',
    items: [
      {
        icon: 'data:image/png;base64,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',
        title: 'ECMAScript 6 入门',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
        link: 'https://es6.ruanyifeng.com/'
      },
      {
        icon: 'https://static.leetcode.cn/cn-mono-assets/production/assets/logo-dark-cn.4c5e285b.svg',
        title: 'leetcode',
        desc: '题库- 力扣(LeetCode) 全球极客挚爱的技术成长平台',
        link: 'https://leetcode.cn/'
      },
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        icon: 'data:image/png;base64,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',
        title: 'TypeScript入门教程',
        desc: '从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。',
        link: 'https://www.tslang.cn/docs/handbook/basic-types.html'
      },
      {
        icon: 'data:image/png;base64,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',
        title: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        link: 'https://www.bootcdn.cn/'
      }
    ]
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5czpvMCAQZh1xf5IFg7iD052P7lRwy3M9cg2HuKoRyw&s',
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: 'https://www.cnblogs.com/images/logo.svg?v=R9M0WmLAIPVydmdzE2keuvnjl-bPR7_35oHqtiBzGsM',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com'
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn'
      }
    ]
  },
  {
    title: 'AI & 摸鱼',
    items: [
      {
        icon: 'data:image/png;base64,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',
        title: '奇の旅-梯子🪜',
        desc: '',
        link: 'https://www.q1travel.cloud/aff.php?aff=8569'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        desc: '',
        link: 'https://www.youtube.com'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7kflFoA83pZ3yAUarKXB8Ky4DvpOTycmMtoIXLcoBQ&s',
        title: 'Twitter',
        desc: '',
        link: 'https://twitter.com'
      },
      {
        icon: 'https://chat.openai.com/favicon-32x32.png',
        title: 'Chat GPT',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://cdn.document360.io/logo/3040c2b6-fead-4744-a3a9-d56d621c6c7e/778d06e9a335497ba965629e3b83a31f-MJ_Boat.png',
        title: 'Midjourney',
        link: 'https://www.midjourney.com/app/'
      },
      {
        icon: 'https://cdn.discordapp.com/embed/avatars/0.png',
        title: 'Discord',
        link: 'https://discord.com/'
      },
      {
        icon: 'https://lexica.art/favicon.ico',
        title: 'Lexica',
        link: 'https://lexica.art/'
      },
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc'
      }
    ]
  }
];
