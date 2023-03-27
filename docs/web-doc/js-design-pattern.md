# JS 设计模式

设计模式代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。
设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。

使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。

## 何为设计
- 1.按照一种思路或者标准来实现功能
- 2.功能相同, 可以有不同的设计方案来实现
- 3.伴随着需求的增加, 设计的作用才体现的出来。方便我们查找代码, 写出高效复用可维护性高的代码

## 5大设计原则(SOLID)
- S - 单一职责原则
  
一个程序只做好一件事。如果功能过于复杂就拆分开, 每个部分保持独立

- O - 开放封闭原则(软件设计终极目标)
  
对扩展开放, 对修改封闭。增加需求时, 扩展新代码, 而非修改已有代码

- L - 李氏置换原则(弱类型 & 继承使用较少)
  
子类可以覆盖父类。父类能出现的地方子类就能出现

- I - 接口独立原则
          
保持接口的单一独立, 避免出现“胖接口”。类似于单一职责原则, 但更关注接口

- D - 依赖导致原则 (没有接口 & 弱类型)
         
面向接口编程, 依赖于抽象而不依赖于具体。使用方只关注接口而不关注具体类的实现

### 用Promise 来体现SO
```js
result.then((img) => {
	console.log('img.width', img.width)
	return img
}).then((img) => {
	console.log('img.height', img.height)
}).catch((error) => {
	console.log(error)
})
```
::: tip
- S: 每个then 中的逻辑只做好一件事情
- O: 如果新增需求, 就扩展then
:::

## 常用设计模式

## 工厂模式

简单介绍:  
- 将 `new` 操作单独封装
- 遇到 `new` 时, 就要考虑是否使用工厂模式

场景:
- jQuery - $('div')
- React.createElement
- vue 异步组件 
```js   
class Vnode(tag, attrs, children) {
  //...
}
React.createElement = function(tag, attrs, children) {
  return new Vnode(tag, attrs, children)
}
Vue.component('async-example', function(resolve, reject) {
	setTimeout(function() {
  	resolve({
    	template: '<div>I am async!</div>'
    })
  }, 1000)
})
```
::: tip
优点: 代码逻辑清晰, 可读性更好

缺点: 符合开闭原则, 当添加新的功能时, 需要编写新的代码, 一定程度上增加了系统复杂度
:::

## 单例模式

简单介绍:
- 系统中被唯一使用
- 一个类只有一个实例

示例:   
- 登录框
- 购物车

代码演示:   
``` js
public class SingleObject{
  // 注意: 私有化构造函数, 外部不能 new, 只能内部 new!!!
  private SingleObject() {
  }
  // 唯一被 new 出来的对象
  private SingleObject instance = null
  // 获取对象的唯一接口
  public SingleObject getInstance() {
  	if (instance == null) {
    	// 只 new 一次
      instance = new SingleObject()
    }
    return instance
  }

	// 对象方法
	public void login(username, password) {
		System.out.printLn("login...")
	}
}
```
```js
class SingleObject {
  login() {
    console.log('login...')
  }
}

SingleObject.getInstance = (fucntion() {
    let instance
    return function () {
  		if (!instance) {
      	instance = new SingleObject()
      }
  		return instance 
		}
})()
```
场景: 

`jQuery` 只有一个$ 模拟登录框
```js
if(window.jQuery != null) {
	return window.jQuery
} else {
  // 初始化
}
```
```js
class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show')  {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }
  
  hide() {
    if (this.state === 'hide') {
    	alert('已经隐藏')
      return
    }
       this.state = 'hide'
    	console.log('登录框隐藏成功')
  }
}

LoginForm.getInstance = (function() {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()
```

## 适配器模式
简单介绍: 
- 旧接口格式和使用者不兼容
- 中间加一个适配转换器

```js 
// 演示: 
class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 中国标准`
	}
}
```

场景: 
- 封装旧接口(ajax)    
- vue的computed
```js
var $ = {
  ajax: function (options) {
    return ajax(options)
  }
}
// 来适配$ajax
```
```js
<div id='example'>
  <p>originMessage: "{{message}}"</p>
	<p>computed reversed message: "{{reversedMessage}}"</p>
</div>

var vm = new Vue({
  el: '#example',
  data: {
  	message: 'HELLO'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // this 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

## 代理模式
简单介绍:  
- 非直接性接触操作
- 中间加代理, 通过代理做授权和控制

示例:  
- 科学上网
- 明星经纪人
场景:  
- 网页事件代理
- jQuery $.proxy
- ES6 Proxy
  
```js
let star = {
  name: '欧xx',
  age: 25,
	phone: '17682342970'
}

// 经纪人
let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone) {
        // 返回经纪人的电话
        return '1768254321'
     }
    
    if (key === 'price') {
      // 明星不报价, 经纪人报价
      return 12000
    }
    
    return target[key]
  },
  
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 10000) {
        // 最低一万
        throw new Error('价格太低‘)
      } else {
        target[key] = val
        return true
      }
    }
  }
})
```
::: tip
- 优点:  使得客户端和目标对象之间有一个中间人, 可以起到保护目标对象的作用, 符合开放封闭原则
- 缺点:   处理请求速度有差别, 非直接访问存在开销
:::

## 装饰器模式
简单介绍:  
- 为对象添加新功能
- 不改变其原有的结构和功能

```js
class Circle {
  draw() {
    consoel.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  
  setRedBorder(circle) {
  	console.log('设置红色边框')
  }
}
```
场景: ES7装饰器
-  core-decorator
```js
      
function mixins(...list) {
	return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    alert('foo')
  }
}

@mixins(Foo)
class MyClass {
}

let obj = new MyClass()
obj.foo()
```

## 外观模式
简单介绍:  
- 为子系统中的一组接口提供了一个高层接口
- 使用者使用这个高层接口

```js 
fucntion bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  // *****
}

// 调用
bindEvent(elem, 'click', '#div1', fn)
bindEvent(elem, 'click', fn)
```
举例: jQuery
::: warning
注意: 不符合单一职责原则和开放封闭原则, 谨慎使用, 不滥用
:::

## 观察者模式
简单介绍:  
- 发布 & 订阅
- 一对多

场景: 
- 网页事件绑定
- redux
- $.callback
- vue react 组件生命周期触发
- vue watch

```js
// 自定义回掉
var callbacks = $.Callbacks()
Callbacks.add(fucntion(info) {
  	consoel.log('fn1', info)         
})

Callbacks.add(fucntion(info) {
    consoel.log('fn2', info)            
})

Callbacks.add(fucntion(info) {
    consoel.log('fn3', info)         
})

callbacks.fire('gogogo')
callbacks.fire('away')
```
```js
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  
  getState() {
    return this.state
  }
  
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  
  notifyAllObservers() {
    this.observers.forEach(observer => {
      	observer.update()
    })
  }
  
  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  
  update() {
    console.log('111')
  }
}

let s = new Subject()
let o1 = new Observer('o1', s)
s.setState(1)
```

## 迭代器模式
简单介绍:  
- 顺序访问一个集合
- 使用者无须知道集合内部结构

示例: 
- for ...of 
- jQuery each
- ES6 Iterator
```js
function each(data) {
  var $data = $(data) // 生成迭代器
  $data.each(fucntion(key, p) {
      console.log(key, p)
   })
}
```
```js
function each(data) {
  let iterator = data[Symbol.iterator]()
  let item = {done: false}
  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  }
}

function each(data) {
  for(let item of data) {
  	console.log(item)
  }
}
```
## 状态模式
简单介绍:  
- 一个对象有状态变化
- 每次状态变化都会触发一个逻辑
- 不能总是用if...else 来控制
  
场景: 有限状态的变化机制