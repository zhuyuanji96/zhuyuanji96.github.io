# JS基础API介绍&实现

## new 运算符

::: tip new 运算符原理

1. 创建一个全新的对象
2. 为新创建的对象添加 **`__proto__`** 属性并指向构造函数的原型对象
3. 将新创建的对象作为函数调用的 this
4. 如果构造函数没有返回对象类型，则返回新创建的对象

:::

::: details 模拟实现 new 运算符
<<< @/web-doc/code/new.js
:::

- [new 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

## instanceof 运算符

::: tip instanceof 运算符原理
`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

:::

::: details 模拟实现 instanceof 运算符
<<< @/web-doc/code/instanceof.js
:::

- [instanceof 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)<br>
- [instanceof 操作符的实现原理](https://juejin.cn/post/6844903613584654344#heading-1)

## Object.create()

::: tip Object.create()
`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的 `__proto__`
:::

::: details 模拟实现 Object.create()
<<< @/web-doc/code/object-create.js
:::

[Object.create() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

## Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

::: details ES5模拟实现 Function.prototype.call()
<<< @/web-doc/code/call.js#es5
:::

::: details ES6模拟实现 Function.prototype.call()
<<< @/web-doc/code/call.js#es6
:::

- [Function.prototype.call() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

## Function.prototype.apply()

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或类数组对象）的形式提供的参数

::: details es6模拟实现 Function.prototype.apply()
<<< @/web-doc/code/apply.js#es6
:::

::: details es5模拟实现 Function.prototype.apply()
<<< @/web-doc/code/apply.js#es5
:::

- [Function.prototype.apply() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

## Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数供调用时使用。

::: details es6模拟实现 Function.prototype.bind()
<<< @/web-doc/code/bind.js#es6
:::

::: details es5模拟实现 Function.prototype.bind()
<<< @/web-doc/code/bind.js#es5
:::

- [Function.prototype.bind() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- 相关学习文章
  - [JavaScript 深入之 bind 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
  - [从一道面试题的进阶，到“我可能看了假源码”](https://zhuanlan.zhihu.com/p/25379434)
  - [从一道面试题的进阶，到“我可能看了假源码”（2）](https://zhuanlan.zhihu.com/p/25483361)



## 交叉/交集观测器 IntersectionObserver
[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

使用场景：检测`dom`元素是否进入视口【滚动加载；懒加载；广告曝光】

使用: ` const io = new IntersectionObserver(callback, option);`

实例方法：

- io.observe(elem)    // 开始检测
- io.unobserve(elem)  // 停止检测
- io.disconnect()     // 关闭检测器



::: tip option 配置对象 

有三个属性 `{threshold: [0], root: null, rootMargin: '0px'}`

1.threshold: 临界值 决定触发回调函数的时机， 值为数字 或 数字数组默认 [0], 表示intersectionRatio达到0时触发回调

2.root: 指定观测的目标元素所在的根节点，即容器；必须是目标元素的祖先节点默认为浏览器视窗

3.rootMargin: 根元素root的外边距；写法规则同css的margin计算交集范围时，可以扩展和缩小root元素的计算边界默认'0px'

:::

::: tip callback 

每当 `intersectionRatio`满足该`IntersectionObserver`指定的`threshold`值，回调被调用`cb`有两个参数 

1、由`IntersectionObserverEntry`对象组成的数组

- boundingClientRect: 目标元素矩形信息
- intersectionRatio: 交叉比例
- intersectionRect: 交叉区域矩形信息
- isIntersecting: 是否交叉
- isVisible: ***未知属性
- rootBounds: 根元素矩形信息
- target: 目标元素
- time: 时间戳

2、io实例 （基本不用）

:::

### 简单示例： 滚动加载

``` html 在列表底部放一个 'loading'元素用于观测
<ul>
  {goodsList.map(v =>  <li key={v}> {v.goodsTitle} </li> )}
</ul>
<div className="loding">loading</div>
```

``` js
  const io = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        console.log('loading元素出现在视窗，请求加载list');
        io.unobserve(v.target); // 防止重复触发 加载时停止观测
        // 加载函数 getGoodsList() 
        // 加载完成 重新打开观测 io.observe(targetElement) 
     	}
    }, {
      threshold: [0.5],
      root: null,
      rootMargin: '0px'
    }
  );
  io.observe(document.querySelector('.loading'));
  ```
