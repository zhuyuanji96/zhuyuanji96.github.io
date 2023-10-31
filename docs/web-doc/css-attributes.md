---
hello: world
---

# CSS之冷门BUT实用系列

## CSS变量 (--名称)
带有前缀--的属性名，比如 `--name`，可以直接在 `css` 中当做一个变量。然后通过 `css` 函数 `var()` 来使用

``` css
body {
  --first-color: #488cff; /*先定义*/
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color); /*再使用*/
  color: var(--second-color, #7f583f); /*var的第二个参数，表示默认值，即--second-color如果找不到，那么就用第二个值*/
}
```

那为什么选择两根连词线（--）表示变量？因为 `$foo` 被 `Sass` 用掉了，`@foo` 被 `Less` 用掉了。为了不产生冲突，官方的 `CSS` 变量就改用两根连词线了。

`css` 变量的作用域范围，和 `css` 样式的范围一致，而且各种值都可以放入 `CSS` 变量。
比如在 `body` 中定义的变量，它可以在 `body` 下的所有元素的 `css` 样式中，通过 `var` 使用。

```css
body {
  --foo: #7f583f;
}
```

在 `.content` 中定义的变量，它可以在 `class="content"` 下的所有元素的 `css` 样式中，通过 `var` 使用。在 `class="content"` 的外部使用无效。

``` css
.content {
  --bar: #f7efd2;
}
```

[详情可以参考文章css 变量](https://link.segmentfault.com/?enc=1yeY6fRWGUbAMHbfUJehcQ%3D%3D.GvLxJ1qcgnx0MRgZn3EKt5t%2BqttKxjLfm2lkQFn%2BO6Itg0LdOnPathvJupdIMoezH5Z0Zjc4SHCeHO1hLUT2Fw%3D%3D)


## -webkit-line-clamp
可以把 块容器 中的内容限制为指定的行数。并且在超过行数后，在最后一行显示"..."

这是正常的展示

<div :class="$style['css-attributes-line-clamp']" >
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
</div>

``` css
display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
-webkit-box-orient: vertical; /*值必须为vertical*/
-webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
overflow: hidden;
```

这是加了 `line-clamp` 后的展示

<div :class="$style['css-attributes-line-clamp-example']">
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
</div>

[具体属性说明点击查看文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp)

## all
将除却 `unicode-bidi` 与 `direction` 之外的所有属性重设至其初始值，或继承值。

``` css
/*initial | inherit | unset  将input中的所有属性（除却 unicode-bidi 与 direction）外重新设置*/
input {
  all: unset; 
}
/*  initial 改变该元素所有属性的值至初始值。 */
/*  inherit 改变该元素的值 至 从父元素继承的值 */
/*  unset 如果该元素的属性的值是可继承的，重置为父元素的继承的值，反之则改变为初始值。 */
```

all 的好处是，不需要一个一个去写每一个属性，它会自动将那些属性全部包含进来。

## aspect-ratio

我们都知道，如果一个 `img`，宽度为 `100%`，高度不设置，则会自动保持长短比。高度随着宽度大小，自动缩放。

但是 `div` 却没有这样的特性。比如我需要一个 `div` 是长、宽，`1：1` 的，那么怎么办？

如果设置成 `100%，100%` 的话肯定不行，这里的百分比基于父元素。高度的 `100%` 和宽度的 `100%` 可不一样。

如果设置成 `100vw`，`100vw` 的话，这样勉强可以。`vw` 是基于浏览器的宽度，`100vw`，就是浏览器的整个宽，如果给高也设置 `100vw`，那宽高就一样。但是实际项目中，宽度很少基于 `vw` 设置（手机浏览器页面中多一点）。大多宽度基于父元素设置。

aspect-ratio 就是福音。它规定了 box 容器一个期待的纵横比，这个纵横比产生的实际宽高，由浏览器来自动计算。

``` css
div {  
  aspect-ratio: 3/1; /*表示当前div的长、宽比为3:1 */
}
```

<div :style="{'width': aspectRatioWidth+'px'}" :class="$style['css-attributes-aspect-ratio']" @click="aspectRatioWidth+=10">
width: {{aspectRatioWidth}} px;
aspect-ratio: 3/1;
</div>



## backdrop-filter

回想一下，我们给一个元素添加 `filter` 属性的效果是什么样子，同时我们可以只给背景添加 `filter`，而不影响前景吗？

这是正常的效果。没有添加 `filter`

<div :class="$style['css-attributes-line-backdrop-filter']">
  <div :class="$style['css-attributes-line-backdrop-filter-sub']">未设置 filter，backdrop-filter</div>
</div>

这是添加 `filter` 的效果。它作用于元素的整体，包括背景、前景 `filter: blur(5px)`

<div :class="$style['css-attributes-line-backdrop-filter']">
  <div :class="$style['css-attributes-line-backdrop-filter-sub']" :style="{'filter': 'blur(5px)'}">
    backdrop-filter: blur(10px)
  </div>
</div>

这是添加 `backdrop-filter` 的效果。它作用于元素的背景

<div :class="$style['css-attributes-line-backdrop-filter']">
  <div :class="$style['css-attributes-line-backdrop-filter-sub']" :style="{'backdrop-filter': 'blur(5px)'}">
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,0.3);
  </div>
</div>

注意如果同时给一个元素设置 `background-color` 和 `backdrop-filter`，则 `backdrop-filter` 不生效。除非 `background-color` 具有一定的透明度

<div :class="$style['css-attributes-line-backdrop-filter']">
  <div :class="$style['css-attributes-line-backdrop-filter-sub']" :style="{'backdrop-filter': 'blur(5px)','background-color':'#fff'}">
    backdrop-filter: blur(5px); background-color: #fff
  </div>
</div>

## background-image
表示在一个元素上，设置一个或者多个背景图。
单个图
``` css
background-image: url('../../media/examples/lizard.png');
```

多个图
```css
background-image: url('../../media/examples/lizard.png'), url('../../media/examples/star.png');
```
注意多个图时，最先指定的层级越高。`lizard.png` 在 `star.png` 的上面，挡住 `start.png`

还可以设置渐变
```css
background-image: linear-gradient(to bottom, rgba(255, 255, 0, 0.5));
```

线性渐变 `linear-gradient`、径向 `radial-gradient`、锥形渐变 `conic-gradient` 都是可以的。

还可以设置 `SVG images`
``` css
background-image: url(delete.svg);
```

## background-blend-mode
表示 `background-image` 和 `background-image` 同时设置时，

或者 `background-image` 和 `background-color` 同时设置时，重合的部分颜色如何混合显示。

如下面代码
``` css
.example {
	background: url(https://live.mdnplay.dev/en-US/docs/Web/CSS/background-blend-mode/tr.png), url(https://live.mdnplay.dev/en-US/docs/Web/CSS/background-blend-mode/br.png);
	background-blend-mode: screen;
}
```

<div :class="$style['background-blend-mode']"></div>

background-blend-mode 可以取下列值:

normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity

它们取不同的值的效果，也可以当独设置一个背景图的混合模式，感兴趣的话可以自己试下。

[详情可以参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)

## box-decoration-break

`box-decoration-break` 属性用来定义当元素跨多行、多列或多页时，元素的片段应如何呈现。

```css
.example {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
  padding: 0em 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}

...
<span class="example">The<br>quick<br>orange fox</span>
```

默认值为  `box-decoration-break: slice;`
```css
-webkit-box-decoration-break: slice;
box-decoration-break: slice;
```
元素被按照盒子被切割前的原始样式渲染，之后，针对每个行/列/页面将此假设框渲染成片段。请注意，假设框对于每个片段可以是不同的，因为如果中断发生在行内方向，则它使用自己的高度，如果中断发生在块方向，则它使用自己的宽度。有关详细信息，请参阅 `CSS` 规范。效果如下:

<span :class="$style['box-decoration-break-example']">The<br>quick<br>orange fox</span>

添加 `box-decoration-break: clone` 样式之后：

``` css
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

每个框片段与指定的边框、填充和边距独立呈现。`border-radius、border-image、box-shadow` 独立地应用于每个片段，每个片段的背景也是独立绘制的，这意味着使用 `background-repeat: no-repeat` 的背景图片仍然可能重复多次。

<span :class="$style['box-decoration-break-example-2']">
The<br>quick<br>orange fox
</span>

[点击查看详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-decoration-break)

## caret-color
用来定义插入光标（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 | 的东西。
``` css
caret-color: red;
```

## calc()
允许在声明 `CSS` 属性值时执行一些计算。 + - * / 运算都可以

``` css
width: calc(100% - 80px); /*注意减号操作符，两边必须有空格，否则不生效*/
width: calc(100% / 6);

--widthA: 100px;
width: calc(var(--widthA) / 2);
width: calc(100% - 80px); /*注意减号操作符，两边必须有空格，否则不生效*/
width: calc(100% / 6);
--widthA: 100px; 
width: calc(var(--widthA) / 2);
```

## clip-path / shape-outside
`clip-path` 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。类似的裁剪还有 `svg` 的 `clipPath`。

- clip-path 的取值有以下几种图形
- inset(xxx): 裁剪为长方形
- circle(xx): 裁剪为原型
- ellipse(xxx): 裁剪为椭圆
- polygon(xx): 裁剪为多边形
- none: 不裁剪

例子🌰前的准备
``` html
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>
```

不裁剪
``` css
clip-path: none;
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

圆形裁剪
``` css
clip-path: circle(40%);  //半径为40%，圆心默认为中心
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: circle(40%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

椭圆裁剪
``` css
clip-path: ellipse(130px 140px at 10% 20%);
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: ellipse(130px 140px at 10% 20%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

多边形裁剪
``` css
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

我们可以看到上面图形如何裁剪，外面的看不见的框始终是矩形，也就是说文字始终是按矩形的样式在周围环绕。

那么有办法让文字紧紧的贴在裁剪的图形周围呢？

有的，使用 `shape-outside` 属性

`shape-outside` 定义了一个可以是 非矩形的形状，相邻的内联内容应围绕该形状进行包裹。默认情况下，内联内容包围其矩形边距;

圆形环绕
``` css
clip-path: circle(40%); 
shape-outside: circle(40%);
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: circle(40%); shape-outside: circle(40%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

椭圆环绕
``` css
clip-path: ellipse(130px 140px at 10% 20%);
shape-outside: ellipse(130px 140px at 20% 20%);
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: ellipse(130px 140px at 10% 20%); shape-outside: ellipse(130px 140px at 20% 20%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

多变形环绕
``` css
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```
<div style="width: 500px; height: 358px;text-align: left;background-color:gray;color:white">
  <img
    style="float: left; margin:20px; clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);"
    src="https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg"
    width="150"
  />
  We had agreed, my companion and I, that I should call for him at his house, after dinner, not later than eleven
  o’clock. This athletic young Frenchman belongs to a small set of Parisian sportsmen, who have taken up “ballooning” as
  a pastime. After having exhausted all the sensations that are to be found in ordinary sports, even those of
  “automobiling” at a breakneck speed, the members of the “Aéro Club” now seek in the air, where they indulge in all
  kinds of daring feats, the nerve-racking excitement that they have ceased to find on earth.
</div>

当然你不一定在圆形裁剪上，使用圆形环绕，你可以在圆形裁剪上使用多边形环绕，在多边形裁剪上，使用菱形环绕。总之这两个之间没关系，不是两两匹配的。都随你便，自己定义。

## object-fit / object-position

`object-fit` 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

`object-position` 属性来指定被替换元素的内容对象在元素框内的对齐方式。

注: 其中可替换元素有 iframe，video，embed，img，还有一些在特性情况也是可替换元素，option，audio，canvas，object

``` html 例子🌰前的准备
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>
```

`fill填满` 图片会拉变形，宽度和高度都被拉到父容器的 100%，以适应父容器

``` css
object-fit: fill;
```
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%; object-fit: fill;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>

`contain包容` 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，较短的边会出现自动填充的空白。

``` css
object-fit: contain;
```
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%; object-fit: contain;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>

`cover覆盖` 图片不会变形，图片会按照自身比例进行缩放，整个图片放入父容器中，按照图片最短的边，纳入父容器为基准。较长的边会溢出

```
object-fit: cover;
```
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%; object-fit: cover;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>

`none` 和父容器的宽高没关系。展示其图片最原始的宽高比，以自身图片的“中心”为基点，放置到父容器的“中心”位置。

``` css
object-fit: none;
```
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%; object-fit: none;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>

`scale-down` 内容的尺寸与 `none` 或 `contain` 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
``` css
object-fit: scale-down;
```
如果图片比父容器尺寸大，那么按照 `contain` 的效果，如果图片比父容器小，那么按照 `none` 的效果。
<div style="width: 300px; height: 300px; background-color:gray;">
  <img 
    style="height: 100%; width: 100%; object-fit: scale-down;" 
    src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
</div>

在上面 `object-fit` 的展示中，我们发现可替换元素的对齐方式都是自动的。

比如 `object-fit: fill;` 的左上角和父容器的左上角对齐。

`object-fit: none;` 的中心和父容器的中心对齐等等。

但是我们想手动更改对齐方式呢？？

可以使用 `object-position` 属性， 规定了可替换元素的内容，在其内容框中的位置。

`object-position: 10px 10px;` 可以设置 `px`，第一个值代表距离父容器左边的距离，第二个值代表距离父容器顶部的距离。只有一个数值则只代表距离父容器左侧的距离。

也可以设置`%`数值，但此时只有某一边有空白才会起作用，如果没有空白，刚好铺满父元素，则不起作用。设置 `px` 就没有这样的问题，任何之后都会起作用。

`object-position: right top;` 可以设置关键字，第一个值关键字可设置（left|center|right），第二个关键字可设置(top|center|bottom),此时不表示距离左侧或者顶部的距离，而表示放置在父元素的什么位置。

```css
object-fit: fill; 
/* 距离左侧10px，距离顶部10% */
object-position: 50px 50px;  
```
加 `object-position` 前后对比图:

<div style="display: flex; gap:20px;">
  <div style="width: 300px; height: 300px; background-color:gray;">
    <img 
      style="height: 100%; width: 100%; object-fit: fill;" 
      src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
  </div>
  <div style="width: 300px; height: 300px; background-color:gray;">
    <img 
      style="height: 100%; width: 100%; object-fit: fill; object-position: 50px 50px;" 
      src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
  </div>
</div>

```css
object-fit: contain; 
/* 停留 右上方 */
object-position: right top;  
```
加 `object-position` 前后对比图:

<div style="display: flex; gap:20px;">
  <div style="width: 300px; height: 300px; background-color:gray;">
    <img 
      style="height: 100%; width: 100%; object-fit: contain;" 
      src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
  </div>
  <div style="width: 300px; height: 300px; background-color:gray;">
    <img 
      style="height: 100%; width: 100%; object-fit: contain; object-position: right top;" 
      src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
  </div>
</div>

<script setup>
  import { ref } from 'vue';

  const aspectRatioWidth = ref(300);
</script>

<style module>
  .css-attributes-line-clamp {
    width: 688px; 
    background-color: gray; 
    color: white; 
    overflow: hidden;
  }
  .css-attributes-line-clamp-example {
    width: 688px; 
    background-color: gray; 
    color: white;
    display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
    -webkit-box-orient: vertical; /*值必须为vertical*/
    -webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
    overflow: hidden;
  }

  .css-attributes-aspect-ratio {
    aspect-ratio: 3/1; /*表示当前div的长、宽比为3:1 */
    background-color: gray;
  }

  .css-attributes-line-backdrop-filter {
    width: 688px; 
    height: 188px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg'); 
    /* background: url('https://interactive-examples.mdn.mozilla.net/media/examples/balloon-small.jpg');  */
  }
  .css-attributes-line-backdrop-filter-sub {
    width: 318px;
    padding:20px;
    color:#000;
    background-color: rgba(0,0,0,0.5); 
    /* filter: blur(10px); */
     /* backdrop-filter: blur(10px); */
  }

  .background-blend-mode {
    width: 300px;
    height: 300px;
	  background: url(https://live.mdnplay.dev/en-US/docs/Web/CSS/background-blend-mode/tr.png), url(https://live.mdnplay.dev/en-US/docs/Web/CSS/background-blend-mode/br.png);
	  background-blend-mode: screen;
  }

  .box-decoration-break-example {
    background: linear-gradient(to bottom right, yellow, green);
    box-shadow:
      8px 8px 10px 0px deeppink,
      -5px -5px 5px 0px blue,
      5px 5px 15px 0px yellow;
    padding: 0em 1em;
    border-radius: 16px;
    border-style: solid;
    margin-left: 10px;
    font: 24px sans-serif;
    line-height: 2;
  }
  .box-decoration-break-example-2 {
    background: linear-gradient(to bottom right, yellow, green);
    box-shadow:
      8px 8px 10px 0px deeppink,
      -5px -5px 5px 0px blue,
      5px 5px 15px 0px yellow;
    padding: 0em 1em;
    border-radius: 16px;
    border-style: solid;
    margin-left: 10px;
    font: 24px sans-serif;
    line-height: 2;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
</style>
