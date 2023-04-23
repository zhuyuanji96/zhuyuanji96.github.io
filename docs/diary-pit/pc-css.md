# 页面Css相关问题记录&解决

## `transform` 导致字体不清晰

#### 原因

`transform` 在渲染非整数的 `px` 时就会出现字体模糊。

#### 解决方案

方案一

```css
目标元素 {
  -webkit-font-smoothing: antialiased;
}
```

方案二

```css
目标元素 {
  transform: perspective(1px);
}
```

[详细说明 CSS-TRACKS](https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/)

## `Android` 浏览器下 `line-height` 垂直居中但是效果出现偏离
#### 坑位描述

这个问题通过 `css` 是无法解决的，即使解决了也是一种通过微调来实现的 `hack` 方法，因为文字在 `content-area` 内部渲染的时候已经偏移了，而 `css` 的居中方案都是控制的整个 `content-area` 的居中。

#### 原因

导致这个问题的本质原因可能是 `Android` 在排版计算的时候参考了 `primyfont` 字体的相关属性（即H`Head Ascent、HHead Descent`等），而 `primyfont`的查找是看`font-family`里哪个字体在 `fonts.xml`里第一个匹配上，而原生 `Android` 下中文字体是没有 `family name` 的，导致匹配上的始终不是中文字体，所以解决这个问题就要在`font-family`里显式申明中文，或者通过什么方`法保证所有字符都 `fallback` 到中文字体。

#### 解决方案
根据这2个思路，目前我找到了2个解决方案：

- 针对 `Android 7.0+` 设备：`<html>` 上设置 `lang` 属性：`<html lang="zh-cmn-Hans">`，同时 `font-family` 不指定英文，如 `font-family: sans-serif`。这个方法是利用了浏览器的字体 `fallback`机制，让英文也使用中文字体来展示，`blink` 早期的内核在 `fallback` 机制上存在问题，`Android 7.0+` 才能ok，早期的内核下会导致英文 `fallback` 到 `Noto Sans Myanmar`，这个字体非常丑。

- 针对`MIUI 8.0+` 设备：设置 `font-family: miui` 。这个方案就是显式申明中文的方案，`MIUI` 在 `8.0+` 上内置了小米兰亭，同时在 `fonts.xml` 里给这个字体指定了 `family name：miui`，所以我们可以直接设置。

[原文链接](https://www.zhihu.com/question/39516424/answer/274374076)
