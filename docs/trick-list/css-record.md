# CSS 常用语法记录

## 刘海屏顶部定位兼容

1. 在 `index.html` 文件的 `meta` 标签 `content` 属性中添加 `viewport-fit=cover` 值开启 `ios` 的安全区域模式。
2. 给需要定位的模块设置默认的 `top` 值，安卓设备会使用这个默认值
3. 有些全屏面的安卓手机(例如小米10)会将专门给ios刘海屏的 `top: env(safe-area-inset-top)` 属性识别0，所以判断系统是否为 `ios`，给 `ios` 系统添加一个特定的类 `topfix`，让元素在 `ios`下使用特殊的高度。或者使用 `max()` 函数选最大值去设置。
4. 通过 `CSS` 的 `@supports` 函数判断，仅在支持 `top: env(safe-area-inset-top)` 属性的 `ios` 设备下使用 `top: env(safe-area-inset-top)` 值。

::: details 点击查看详情
index.html中的meta标签添加viewport-fit=cover,开启ios安全区域模式
```html

<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
```

css样式
```css

#root {
  --safe-top: max(1.25rem, env(safe-area-inset-top));

/* 支持top: env(safe-area-inset-top)的设备使用 env(safe-area-inset-top)值 */
  @supports (padding-top: env(safe-area-inset-top)) {
    .page-router {
      padding-top: calc(2.75rem + var(--safe-top));
      .router-header {
        padding-top: max(1.25rem, var(--safe-top));
      }
    }
  }

/* 不支持top: env(safe-area-inset-top)的设备使用的自定义的值 */
  @supports not (padding-top: env(safe-area-inset-top)) {
    .page-router {
      padding-top: calc(2.75rem + 1.25rem);
      .router-header {
        padding-top: 1.25rem;
      }
    }
  }
}
```
:::

## 滚动条样式

```css
/* 滚动条 */
::-webkit-scrollbar {
  /* 纵向 */
  width: 8px;
  /* 横向 */
  height: 8px;
  background-color: #ededed;
}
/* 滚动条上的按钮(上下箭头) */
::-webkit-scrollbar-button {
  display: none;
}
/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #ededed;
}
/* 滚动条轨道，没有滑块 */
::-webkit-scrollbar-track-piece {
  background-color: #ededed;
}
/* 垂直滚动条和水平滚动条交汇的部分 */
::-webkit-scrollbar-corner {
  background-color: #ededed;
}
/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d6d6d6;
}
/* 右下角拖动块 */
::-webkit-resizer {
  display: none;
}
```

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)
