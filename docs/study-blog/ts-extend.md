# TS语法拓展

`TypeScript` 中常用的一些语法以及概念。

## extends
`extends` 关键字在 `TS` 中的两种用法，即接口继承和条件判断。

### 接口继承
`extends` 用来做继承功能，与 `ES6` 的 `Class` 语法中的继承类似。来看示例

``` ts
  interface T1 {
    name: string
  }
  
  interface T2 {
    sex: number
  }
  
  // 多重继承，逗号隔开
  interface T3 extends T1,T2 {
    age: number
  }
  
  // 合法
  const t3: T3 = {
    name: 'xiaoming',
    sex: 1,
    age: 18
  }
  ```
示例中，T1和T2两个接口，分别定义了name属性和sex属性，T3则使用extends使用多重继承的方式，继承了T1和T2，同时定义了自己的属性age，此时T3除了自己的属性外，还同时拥有了来自T1和T2的属性。

### 条件判断

条件判断的用法，可区分为普通用法和泛型用法

#### 1. 普通用法

``` ts
  interface Animal {
    eat(): void
  }
  
  interface Dog extends Animal {
    bite(): void
  }
  
  // A的类型为string
  type A = Dog extends Animal ? string : number
  
  const a: A = 'this is string'
```
`extends` 用来条件判断的语法和JS的三元表达是很相似，如果问号前面的判断为真，则取第一个类型，否则取第二个类型。

::: tip `extends` 判断条件真假的逻辑:
如果`extends`前面的类型能够赋值给`extends`后面的类型，那么表达式判断为真，否则为假。
:::

``` ts
  interface A1 {
    name: string
  }

  interface A2 {
    name: string
    age: number
  }
  // A的类型为string
  type A = A2 extends A1 ? string : number
  
  const a: A = 'this is string'
```
A1，A2两个接口，满足A2的接口一定可以满足A1，所以条件为真，A的类型取string

#### 2. 泛型用法

- 分配条件类型

``` ts
  type A1 = 'x' extends 'x' ? string : number; // string
  type A2 = 'x' | 'y' extends 'x' ? string : number; // number
  
  type P<T> = T extends 'x' ? string : number;
  type A3 = P<'x' | 'y'>  // A3的类型是 string | number
```

`A1`和`A2`是`extends`条件判断的普通用法，和上面的判断方法一样。

`P` 是带参数T的泛型类型，其表达式和 `A1`，`A2` 的形式完全相同，`A3`是泛型类型P传入参数 `'x' | 'y'` 得到的类型，如果将 `'x' | 'y'` 带入泛型类的表达式，可以看到和 `A2` 类型的形式是完全一样的，但是 `A3` 的类型却是 `string | number`
 
那为什么会有这种结果呢？

想要了解其原因，首先要了解下分配条件类型（Distributive Conditional Types）

::: tip `When conditional types act on a generic type, they become distributive when given a union type`

对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
:::

还是用上面的例子说明

该例中，`extends`的前参为 `T`，`T` 是一个泛型参数。在 `A3` 的定义中，给 `T` 传入的是 `'x'` 和 `'y'` 的联合类型 `'x' | 'y'`，满足分配律，于是 `'x'` 和 `'y'` 被拆开，分别代入 `P<T>`

``` ts
  type P<T> = T extends 'x' ? string : number;
  type A3 = P<'x' | 'y'>  // A3的类型是 string | number

  type A3 = P<'x'> | P<'y'>  // 'x' extends 'x' ? string : number | 'y' extends 'x' ? string : number
  type A3 = string | number
```
总之，满足两个要点即可适用分配律：第一，参数是泛型类型，第二，代入参数的是联合类型


- 特殊的never

``` ts
  // never是所有类型的子类型
  type A1 = never extends 'x' ? string : number; // string
  type P<T> = T extends 'x' ? string : number;
  type A2 = P<never> // never
```

实际上，这里还是条件分配类型在起作用。`never` 被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律，然而因为没有联合项可以分配，所以 `P<T>` 的表达式其实根本就没有执行，所以 `A2` 的定义也就类似于永远没有返回的函数一样，是 `never` 类型的。


- 防止条件判断中的分配

``` ts
  type P<T> = [T] extends ['x'] ? string : number;
  type A1 = P<'x' | 'y'> // number
  type A2 = P<never> // string
```

在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配，此时，传入参数T的类型将被当做一个整体，不再分配。