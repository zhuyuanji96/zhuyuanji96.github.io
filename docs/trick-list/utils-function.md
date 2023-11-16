# 常用工具方法

## debounce 函数防抖

::: tip 函数防抖
**作用**: 一个函数在一段时间内多次触发都**只执行最后一次** <br>
**原理**: 利用定时器，在函数第一次执行时设定一个定时器，再次调用时如果已经设定过定时器就清空之前的定时器并设定一个新的定时器，当定时器结束后执行传入的回调函数 <br>
**应用**: 搜索输入框获取用户输入的联想结果
:::

::: details 实现防抖函数
```js
// js
function debounce(fn, wait) {
  // 通过闭包缓存定时器 id
  let timer = null
  return function (...args) {
    // 如果定时器已经存在，清除定时器
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设定定时器，定时器结束后执行传入的回调函数 fn
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

// ts
/**
 * 防抖函数
 * @param {*} func 需要防抖的函数
 * @param {*} wait 防抖时间间隔
 * @param {*} immediate 第一次是否立即执行
 */
export function debounce(
  func: (...args: any[]) => void,
  wait: number,
  immediate = false
): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  function debounced(...args: any[]): void {
    const callNow = immediate && !timeout

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        func(...args)
      }
    }, wait)

    if (callNow) {
      func(...args)
    }
  }

  return debounced
}

```
:::

## throttle 函数节流

::: tip 函数节流
**作用**: 函数节流指指的是在一段时间内只允许函数执行一次 (例如 `3` 秒执行一次那么在函数第一次调用后的 `3` 秒内后面的函数调用将被忽略) <br>
**原理**: 利用时间戳来判断，记录上次执行的时间戳，在每次触发事件时判断当前时间是否大于上次执行的时间 + 设置的间隔 ，如果是则执行回调并更新上次执行的时间戳<br>
**应用**: 降低 `scroll resize` 事件的触发频率

:::

::: details 实现节流函数
```js
function throttle(fn, wait) {
  // 通过闭包缓存上一次的调用时间 (默认为 0)
  let lastCallTime = 0
  return function () {
    const now = Date.now()
    // 判断当前调用时间和上次调用时间的差值是否大于 wait
    if (now - lastCallTime >= wait) {
      // 更新调用时间
      lastCallTime = now
      // 执行回调函数
      fn.apply(this, arguments)
    }
  }
}

// ts
/**
 * 截流函数
 * @param {*} func 需要截流的函数
 * @param {*} wait 等待时间
 */
export function throttle(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
  let isThrottled = false
  let lastArgs: any[] | null = null
  let timeoutId: number | null = null

  function throttled(...args: any[]): void {
    if (isThrottled) {
      // 如果已经在节流状态，则存储最新的参数
      lastArgs = args
    } else {
      // 如果不在节流状态，则立即执行函数
      func(...args)
      isThrottled = true

      // 设置定时器，在指定的时间后将节流状态重置
      timeoutId && clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        isThrottled = false
        if (lastArgs) {
          // 如果存在存储的参数，则以最新参数再次执行函数
          throttled(...lastArgs)
          lastArgs = null
        }
      }, wait)
    }
  }

  return throttled
}
```
:::

## 提取身份证信息

- #### 参数

  - **idCard:** 身份证号码
  - **separator:** 出生年月日的分割字符，默认为 `/`

- #### 返回值

  - **age:** 年龄（实岁）
  - **birthday:** 出生年月日
  - **gender:** 性别（0 女 1 男）

```js
function getIdCardInfo(idCard, separator = '/') {
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
      idCard
    )
  ) {
    throw Error(`${idCard}不是一个身份证号码`)
  }
  // 提取 idCard 中的字符
  const idSubstr = (s, e) => idCard.substr(s, e)
  // 拼接日期
  const splice = (d) => d.join(separator)
  // 获取出生年月日 性别（0 女 1 男）
  let birthday, gender
  if (idCard.length === 18) {
    birthday = splice([idSubstr(6, 4), idSubstr(10, 2), idSubstr(12, 2)])
    gender = idSubstr(-2, 1) & 1
  } else {
    birthday = splice(idSubstr(6, 2), idSubstr(8, 2), idSubstr(10, 2))
    gender = idSubstr(-1, 1) & 1
  }
  // 获取年龄（实岁）
  const birthDate = new Date(birthday)
  const newDate = new Date()
  const year = newDate.getFullYear()
  let age = year - birthDate.getFullYear()
  if (newDate < new Date(splice([year, birthday.substring(5)]))) {
    age--
  }
  return {
    age,
    birthday,
    gender
  }
}
```

## 环境判断

```js
const UA = window.navigator.userAgent.toLowerCase()

// Android
const isAndroid = /android/.test(UA)

// IOS
const isIOS = /iphone|ipad|ipod|ios/.test(UA)

// 浏览器环境
const inBrowser = typeof window !== 'undefined'

// IE
const isIE = /msie|trident/.test(UA)

// Edge
const isEdge = UA.indexOf('edge/') > 0

// Chrome
const isChrome = /chrome\/\d+/.test(UA) && !isEdge

// 微信
const isWeChat = /micromessenger/.test(UA)

// 移动端
const isMobile = 'ontouchstart' in window

// 获取ios版本号
const getIosVersion = () => {
  const result = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/) || [];

  return (result[1] || '1').replace(/_/g, '.');
};

// 获取android版本号
const getAndroidVersion = () => {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(/Android\s([0-9\.]*)/);
  
  return (match || [])[1] || '1';
};
```
