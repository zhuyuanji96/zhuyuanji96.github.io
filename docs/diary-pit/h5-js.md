# 移动端H5页面js相关问题记录&解决

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
