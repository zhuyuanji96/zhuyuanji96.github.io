# 微信小程序使用装饰模式进行功能扩展

现在市场上的微信小程序大致分为两类：使用其他技术栈开发的（`mpvue`，`Taro`，`wePY`）和在小程序原有框架上进行拓展的（`omix`，`wxpage`）等；对于相对比较完整的小程序，而且没有多端同构的需求，在小程序原有基础上进行扩展的框架相对比较适用于我们，但是这类框架会冗余很多我们不需要的功能代码；所以此文介下如何借助装饰模式对小程序进行一些轻量的自定义拓展，以及实现原理。

::: details 微信小程序功能扩展核心代码实现
``` js
// 可以用于拓展的生命周期
const life = {
  Page: ['preprocess', 'onLoad', 'onShow', 'onHide', 'onUnload', 'onShareAppMessage'],
};

// 用于保存所有的拓展生命周期函数
const lifeMixin = {};
for (let key in life) {
  lifeMixin[key] = lifeMixin[key] || {};
  for (let lifeTime of life[key]) {
    lifeMixin[key][lifeTime] = [];
  }
}

// 基类对象
// 在调用Page前会被混入到对象中
const base = { Page: {} };

// 拓展生命周期函数方法
const WeAppExtend = function (param) {
  // 允许接收数组形式的参数
  if (isArray(param)) {
    param.forEach(item => WeAppExtend(item));
    return;
  }
  for (const constructorName in param) {
    // constructorName 当前支持 Page
    if (!life[constructorName]) {
      warning(constructorName, 'not found');
      continue;
    }

    const option = Object.assign({}, param[constructorName]);
    // 如果是生命周期中的某一个，作为生命周期拓展
    for (const key in option) {
      if (lifeMixin[constructorName][key]) {
        lifeMixin[constructorName][key].push(option[key]);
        delete option[key];
      }
    }
    // 把剩余的属性混入到基类中
    mixin(base[constructorName], option);
  }
};

// 重新包装的 Page构造函数，并对life.Page中生命周期函数进行（传入配置）扩展
const _Page = decorate(Page, function (option) {
  mixin(option, base.Page);
  for (const lifeTime of life.Page) {
    option[lifeTime] = decorate(option[lifeTime], ...lifeMixin.Page[lifeTime]);
  }
  option['preprocess'] && option['preprocess'].call(option, option);
});

// 装饰函数
// 在调用原函数之前调用所有装饰器
function decorate(f, ...decorators) {
  return function () {
    for (const decorator of decorators) {
      decorator && decorator.apply(this, arguments);
    }
    return f && f.apply(this, arguments);
  };
}

/**
 * 实现类似混入的效果
 * 类似 Object.assign， 但在遇见相同属性名均是对象时会递归进行合并而非直接覆盖
 * @param o
 * @param mix 可以传入多个
 * 注：如果存在引用循环递归会栈溢出
 */
function mixin(o, ...mixs) {
  mixs.forEach(mix => {
    for (const key in mix) {
      // 两个属性都是对象则递归合并
      if (isObject(o[key]) && isObject(mix[key])) {
        mixin(o[key], mix[key]);
      } else {
        o[key] = o[key] || mix[key];
      }
    }
    // 拷贝symbol类型，（可惜小程序不支持）
    for (const sym of Object.getOwnPropertySymbols(mix)) {
      o[sym] = o[sym] || mix[sym];
    }
  });
  return o;
}

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}
function warning(...msg) {
  WeAppExtend.tips && console.warn('we-app-extend:', ...msg);
}

Object.assign(WeAppExtend, {
  mixin,
  decorate,
  Page: _Page,
  warning,
  tips: true,
});
export default WeAppExtend;
```
:::

## `we-app-extend` 核心方法

上诉代码中已实现的一些核心方法简介

### `WeAppExtend`

核心方法，提供全局混入的能力，接收一个 `mixinOption` 或 一个 `[mixinOption]` 数组， 合并策略与 `vue` 的一致（合并 `data` 对象，方法优先使用页面组件定义的方法）
`mixinOption` 格式与小程序原有的开发模式完全相同，只是分成了 `APP`，`Page`，`Component`三个部分