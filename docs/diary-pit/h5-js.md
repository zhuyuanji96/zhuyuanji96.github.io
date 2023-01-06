# 移动端H5页面js相关问题记录&解决

## globalThis is not defined部分浏览器报错

#### 坑位描述

最近发现部分安卓手机在App中打开 `vite` 打包的页面时页面加载不出来。后来发现报错提示`globalThis is not defined`，打包后的js有使用全局变量
`globalThis` 但是有些浏览器环境下咩有定义`globalThis`。

#### 解决方法

在html头部加上如下代码：
```html
<head>
    <script>
        this.globalThis || (this.globalThis = this)
    </script>
    ...
</head>
```

## JS复制文案在异步方法中复制失败

::: details 复制文本方法实现
```js
export const copy = (text: string): Promise<void> => {
  let fakeElem: null | HTMLTextAreaElement = null

  const isRTL = document.documentElement.getAttribute('dir') == 'rtl'
  fakeElem = document.createElement('textarea')
  // Prevent zooming on iOS
  fakeElem.style.fontSize = '12pt'
  // Reset box model
  fakeElem.style.border = '0'
  fakeElem.style.padding = '0'
  fakeElem.style.margin = '0'
  // Move element out of screen horizontally
  fakeElem.style.position = 'absolute'
  fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'
  // Move element to the same position vertically
  const yPosition = window.pageYOffset || document.documentElement.scrollTop
  fakeElem.style.top = `${yPosition}px`

  fakeElem.setAttribute('readonly', '')
  fakeElem.value = text

  document.body.appendChild(fakeElem)

  select(fakeElem)

  return new Promise((resolve, reject) => {
    try {
      document.execCommand('copy')
      resolve()
    } catch (err) {
      reject()
    }
    if (fakeElem) {
      document.body.removeChild(fakeElem)
    }
  })
}
```
:::

#### 坑位描述

刚开始发现这个问题是为了实现ajax请求结束后调用`exec`这个api去执行复制操作。但是在复制的时候显示复制错误，`exec`这个api返回`false`，然后去找了很多资料，最后在
https://stackoverflow.com/questions/31925944/execcommandcopy-does-not-work-in-ajax-xhr-callback
上找到答案

You can only trigger a copy to the system clipboard in direct response to a trusted user action, such as a click event. 

#### 为什么

`document.execCommand()`这个api只能在真正的用户操作之后才能被触发，是为了安全考虑。原理大致是这样的，当用户操作之后，chrome会将当前作用域下的`userAction`变量置为`true`，然后执行`execCommand`时就会去读取这个变量，当为`true`的时候才可以执行。

`ajax`基本都是异步请求，而异步请求不同于同步请求的地方就在于重新创建了一个作用域去执行回调函数。
所以在重新创建一个作用域之后，之前作用域内的`userAction`就失效了，当前作用域下的`userAction`为`false`，所以复制不成功

#### 解决方法
1. 用真正的用户操作去执行`execCommand`。（可能需要修改交互流程）
2. 将异步请求改成同步请求。这样做就不会创建新的作用域，`execCommand`命令依旧在`userAction`为`true`的上下文下执行。（当然这种做法也不是很推荐，但为了满足需求只能这样做，只要把`xhr.open`里的最后一个参数改为`false`即可满足同步请求）


## WebView 返回上一页不刷新

#### 原因

为了提升浏览网页的效率加入了缓存机制

#### 解决方案

监听 `pageshow` 事件，通过 `persisted` 或者 `performance.navigation.type` 属性判断当前页面是否通过缓存载入

```js
const pageshowFn = (e) => {
  if (
    e.persisted ||
    (window.performance && window.performance.navigation.type === 2)
  ) {
    location.reload()
  }
}
window.addEventListener('pageshow', pageshowFn)
```

