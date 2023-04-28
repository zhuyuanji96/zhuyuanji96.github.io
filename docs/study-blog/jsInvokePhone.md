# H5唤起手机拨号和发短信功能

在移动端页面，有时候我们需要唤起用户手机的打电话功能，拨打客服电话，以及发送短信功能，此时我们可以按照以下操作实现打电话和发短信功能

## 拨打电话

- `index.html` 在 `<head></head>` 中加入这一段

``` html
<meta name="format-detection" content="telephone=yes"/>
```

- js

``` js
window.location.href = 'tel:4000-000-000';
```

- 或者

```
<a href="tel:4000-000-000">拨打电话</a>
```

## 发送短信

- `index.html` 在 `<head></head>` 中加入这一段
  
``` html
<meta name="format-detection" content="telephone=yes"/>
```

- js
```
// 添加内容
window.location.href = 'sms:10086?body=短信内容';
// 不添加内容
window.location.href = 'sms:10086';
```

- 或者

``` html
<a href="sms:10086">发送短信</a>
<a href="sms:10086?body=短信内容"></a>
```

## 移动web页面自动探测电话号码

```html
<meta name="format-detection" content="telephone=no">
<meta http-equiv="x-rim-auto-match" content="none">
```

## 使用wtai协议进行拨打电话

```html
<a href="wtai://wp//mc;10086">拨打10086 </a>  
<a href="wtai://wp/ap;10086;">存储</a>
```

## 关于微信页面出现屏蔽的情况，采用以下解决方案

解决方法如下：
- 1、拨号的代码还是不变，和原先的一样，
- 2、打开拨号页面要做下处理，在网址后面增加一个锚节点mp.weixin.qq.com。
  
实例如下：

如：`<a href=“tel:10086”>` 一键拨号 `</a>` 上需要拨号代码，操作如下

在有这个代码的页面URl后边加上 `“#mp.weixin.qq.com”` 如：`tel:10086#mp.weixin.qq.com`

[原文链接](https://segmentfault.com/q/1010000002648066)