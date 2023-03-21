# TS 语法拓展

`TypeScript` 中常用的一些语法以及概念。

## typeof

`TS` 和 `JS` 里面都有 `typeof` 关键字，并且其二者的作用都差不多
负责转化 `JS data`（常量或者变量）
差异是转化结果不一样：

- 在 `TS` 中，是转化成 一个 `TS` 类型定义，也就是 `type`，`JS data -> TS type`
- 在 `JS` 中，是转化成 一个字符串，表示未经计算的操作数的类型，`JS data -> JS data`

### 基本用法

```ts
// JS 对象
const JPeople = {
  name: '张大炮',
  age: 18,
};

// TS 类型 type
type TPeople = {
  name: string;
  age: number;
};

// TS 类型 interface
interface IPeople {
  name: string;
  age: number;
}

// 以下方式会被认为是 JS 的 typeof
const JsKeyword1 = typeof JPeople; // const JsKeyword1 = "string"
const JsKeyword2 = typeof TPeople; // 错误，TPeople 不是数据，不能获取数据类型
const JsKeyword3 = typeof IPeople; // 错误，IPeople 不是数据，不能获取数据类型

// 以下方式会被认为是 TS 的 typeof
type TsType1 = typeof JPeople; // type TsType1 = {name: string; age: number}
type TsType2 = typeof TPeople; // 错误，TPeople 已经是 TS 类型了，不能再转化
type TsType3 = typeof IPeople; // 错误，IPeople 已经是 TS 类型了，不能再转化
```

而使用的地方决定了它是 `TS` 还是 `JS` 的 `typeof`

::: tip 注意：
在 `TS` 中，`typeof` 只能对数据进行转化，所以不能转化 `type` 和 `interface`
:::

### 枚举 Enum

`typeof` 可以转化 `enum`，因为其本质是 `JS` 对象

```ts
// 纯数字枚举
enum ENUM_NUMBER {
  FIRST,
  SECOND,
  THIRD,
}

// 非纯数字枚举
enum ENUM_WHEREVER {
  FIRST = '第一个',
  SECOND = '第二个',
  THIRD = 333,
}
```

`TS` 中定义枚举 `enum` 后，在 `JS` 中会被解析成对象，如下所示：

```ts
var ENUM_NUMBER;
(function (ENUM_NUMBER) {
  ENUM_NUMBER[(ENUM_NUMBER['FIRST'] = 0)] = 'FIRST';
  ENUM_NUMBER[(ENUM_NUMBER['SECOND'] = 1)] = 'SECOND';
  ENUM_NUMBER[(ENUM_NUMBER['THIRD'] = 2)] = 'THIRD';
})(ENUM_NUMBER || (ENUM_NUMBER = {})); // 字符串枚举

(function (ENUM_WHEREVER) {
  ENUM_WHEREVER['FIRST'] = '\u7B2C\u4E00\u4E2A';
  ENUM_WHEREVER['SECOND'] = '\u7B2C\u4E8C\u4E2A';
  ENUM_WHEREVER[(ENUM_WHEREVER['THIRD'] = 333)] = 'THIRD';
})(ENUM_WHEREVER || (ENUM_WHEREVER = {}));
```

所以你可以把 `enum` 理解为 `object`，所以它是一份数据，那当然可以使用 `typeof` 对其进行转化

```ts
// type TsType4 = {FIRST: number; SECOND: number, THIRD: number}
type TsTypeEnumNumber = typeof ENUM_NUMBER;

// type TsTypeEnumWherever = {FIRST: string; SECOND: string, THIRD: number}
type TsTypeEnumWherever = typeof ENUM_WHEREVER;
```

## keyof

`keyof` 的作用将一个 类型 映射为它 所有成员名称的联合类型

- type -> type（联合类型）
- interface -> type（联合类型）

### 基本用法

```ts
// 用 TS interface 描述对象
interface TsInterfaceObject {
  first: string;
  second: number;
}

// 用 TS type 描述对象
type TsTypeObject = {
  first: string;
  second: number;
};

// 用 Ts type 描述基本类型别名
type TsTypeAlias = string;

class JsClass {
  private priData: number;
  private priFunc() {}

  public pubData: number;
  public pubFunc1() {}
  public pubFunc2() {}
}

/**
 * 将所描述对象中的所有 key 组合成一个联合类型
 * type NameUnionOfInterface = "first" | "second"
 */
type NameUnionOfInterface = keyof TsInterfaceObject;

/**
 * 将所描述对象中的所有 key 组合成一个联合类型
 * type NameUnionOfType = "first" | "second"
 */
type NameUnionOfTypeObj = keyof TsTypeObject;

/**
 * 对一个非对象类型使用 keyof 后，会返回其 prototype 上所有 key 组合成的一个联合类型
 * type NameUnionOfTypeAlias = number | typeof Symbol.iterator | "toString" | "charAt" | ...
 */
type NameUnionOfTypeAlias = keyof TsTypeAlias;

/**
 * 其实也是返回 prototype 上所有 key（因为其实 private 私有部分实际是放在实例化对象中，而非原型）
 * type NameUnionOfClass = "pubData" | "pubFunc1" | "pubFunc2"
 */
type NameUnionOfClass = keyof JsClass;
```

### keyof + typeof

前面提到有三个知识点

- `typeof` 可以进行 `JS data -> TS type` 的转换
- `keyof` 可以进行 `TS type -> TS (union) type` 的转换
- `enum` 其实就是 `JS (object) data`

```ts
// JS 对象
const JsObject = {
  first: '第一个',
  second: 222,
};

// TS 枚举
enum TS_ENUM {
  FIRST,
  SECOND,
}

type NameUnionOfObject = keyof typeof JsObject; // type NameUnionOfObject = "first" | "second"
type NameUnionOfEnum = keyof typeof TS_ENUM; // type NameUnionOfObject = "FIRST" | "SECOND"
```

## in

关键字 `in` 是用来遍历枚举类型的

### 基本用法

```ts
// TS 联合类型
type TsTypeUnion = 'first' | 'second';

// type TsTypeObject1 = { first: any, second: any }
type TsTypeObject1 = {
  [P in TsTypeUnion]: any;
};

// type TsTypeObject2 = { first: "first", second: "second" }
type TsTypeObject2 = {
  [P in TsTypeUnion]: P;
};
```

### in + keyof

- `keyof` 将 描述对象的类型 转化为 枚举类型
- `in` 对 枚举类型 进行遍历

下面用一个“脱裤子放屁”的例子来演示它们两者结合使用的场景：

```ts
// TS 描述对象的类型
type TsTypeObject = {
  first: string;
  second: number;
};

// type TsTypeObjectNew1 = { first: any, second: any }
type TsTypeObjectNew1 = {
  [P in keyof TsTypeObject]: any;
};

// type TsTypeObjectNew2 = { first: string, second: number }
type TsTypeObjectNew2 = {
  [P in keyof TsTypeObject]: TsTypeObject[P];
};
```

### in + keyof + typeof

`typeof` 将 `JS` 对象 转化为 描述对象的类型
`keyof` 将 描述对象的类型 转化为 枚举类型
`in` 对 枚举类型 进行遍历

处理 `JS` 对象：

```ts
// JS 对象
const JsObject = {
  name: '张大炮',
  age: 18,
};

// type TsTypeObject1 = { name: any; age: any; }
type TsTypeObject1 = {
  [P in keyof typeof JsObject]: any;
};

/**
 * 等价于下面两种写法：
 * type TsTypeObject2 = { name: any; age: any; }
 * type TsTypeObject2 = typeof JsObject
 */
type TsTypeObject2 = {
  [P in keyof typeof JsObject]: typeof JsObject[P];
};
```

处理 `TS` 枚举：

```ts
// 纯数字枚举
enum ENUM_NUMBER {
  FIRST,
  SECOND,
  THIRD,
}

enum ENUM_WHEREVER {
  FIRST = '第一个',
  SECOND = '第二个',
  THIRD = 333,
}

/**
 * 
    type TsType1 = {
      [x: number]: any;
      readonly FIRST: any;
      readonly SECOND: any;
      readonly THIRD: any;
    }
 */
type TsType1 = {
  [P in keyof typeof ENUM_NUMBER]: any;
};

/**
    type TsType2 = {
      [x: number]: string;
      readonly FIRST: ENUM_WHEREVER.FIRST;
      readonly SECOND: ENUM_WHEREVER.SECOND;
      readonly THIRD: ENUM_WHEREVER.THIRD;
    }
 */
type TsType2 = {
  [P in keyof typeof ENUM_WHEREVER]: typeof ENUM_WHEREVER[P];
};
```

## extends

在 `TS` 中，`extends` 大体分为三种使用场景：

- 类型继承，类型 `A` 去继承类型 `B`（`interface` 可用 `extends` 继承，`type` 不可以）
- 条件匹配，判断类型 `A` 是否“匹配”类型 `B`
- 定义范型，约束范型必须是与目标类型“匹配的”

### 接口继承

`extends` 用来做继承功能，与 `ES6` 的 `Class` 语法中的继承类似。来看示例

```ts
interface T1 {
  name: string;
}

interface T2 {
  sex: number;
}

// 多重继承，逗号隔开
interface T3 extends T1, T2 {
  age: number;
}

// 合法
const t3: T3 = {
  name: 'xiaoming',
  sex: 1,
  age: 18,
};
```

示例中，T1 和 T2 两个接口，分别定义了 name 属性和 sex 属性，T3 则使用 extends 使用多重继承的方式，继承了 T1 和 T2，同时定义了自己的属性 age，此时 T3 除了自己的属性外，还同时拥有了来自 T1 和 T2 的属性。

### 条件判断

条件判断的用法，可以简单理解为一个三目运算：

```ts
interface Animal {
  eat(): void;
}

interface Dog extends Animal {
  bite(): void;
}

// A的类型为string
type A = Dog extends Animal ? string : number;

const a: A = 'this is string';
```

`extends` 用来条件判断的语法和 JS 的三元表达是很相似，如果问号前面的判断为真，则取第一个类型，否则取第二个类型。

::: tip `extends` 判断条件真假的逻辑:
如果`extends`前面的类型能够赋值给`extends`后面的类型，那么表达式判断为真，否则为假。
:::

```ts
interface A1 {
  name: string;
}

interface A2 {
  name: string;
  age: number;
}
// A的类型为string
type A = A2 extends A1 ? string : number;

const a: A = 'this is string';
```

A1，A2 两个接口，满足 A2 的接口一定可以满足 A1，所以条件为真，A 的类型取 string

### 定义范型

- 分配条件类型

```ts
type A1 = 'x' extends 'x' ? string : number; // string
type A2 = 'x' | 'y' extends 'x' ? string : number; // number

type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>; // A3的类型是 string | number
```

`A1`和`A2`是`extends`条件判断的普通用法，和上面的判断方法一样。

`P` 是带参数 T 的泛型类型，其表达式和 `A1`，`A2` 的形式完全相同，`A3`是泛型类型 P 传入参数 `'x' | 'y'` 得到的类型，如果将 `'x' | 'y'` 带入泛型类的表达式，可以看到和 `A2` 类型的形式是完全一样的，但是 `A3` 的类型却是 `string | number`

那为什么会有这种结果呢？

想要了解其原因，首先要了解下分配条件类型（Distributive Conditional Types）

::: tip `When conditional types act on a generic type, they become distributive when given a union type`

对于使用 extends 关键字的条件类型（即上面的三元表达式类型），如果 extends 前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
:::

还是用上面的例子说明

该例中，`extends`的前参为 `T`，`T` 是一个泛型参数。在 `A3` 的定义中，给 `T` 传入的是 `'x'` 和 `'y'` 的联合类型 `'x' | 'y'`，满足分配律，于是 `'x'` 和 `'y'` 被拆开，分别代入 `P<T>`

```ts
type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>; // A3的类型是 string | number

type A3 = P<'x'> | P<'y'>; // 'x' extends 'x' ? string : number | 'y' extends 'x' ? string : number
type A3 = string | number;
```

总之，满足两个要点即可适用分配律：第一，参数是泛型类型，第二，代入参数的是联合类型

- 特殊的 never

```ts
// never是所有类型的子类型
type A1 = never extends 'x' ? string : number; // string
type P<T> = T extends 'x' ? string : number;
type A2 = P<never>; // never
```

实际上，这里还是条件分配类型在起作用。`never` 被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律，然而因为没有联合项可以分配，所以 `P<T>` 的表达式其实根本就没有执行，所以 `A2` 的定义也就类似于永远没有返回的函数一样，是 `never` 类型的。

- 防止条件判断中的分配

```ts
type P<T> = [T] extends ['x'] ? string : number;
type A1 = P<'x' | 'y'>; // number
type A2 = P<never>; // string
```

在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配，此时，传入参数 T 的类型将被当做一个整体，不再分配。

## as

运算符 `as` 的作用可以理解为改变原有类型定义，分为以下两种场景：

- 断言
- 转化

### 断言 `JS` 数据

```ts
const myStr: any = 'tellyourmad';
const myStrLength: number = (someValue as string).length;
```

### 转化 `TS` 类型

```ts
type TsUnionType = 'a' | 'b' | 1 | 2;

// type TsType1 = { a: any; b: any; 1: any; 2: any; }
type TsType1 = {
  [P in TsUnionType]: any;
};

/**
 * 强制将 key 全都 as 成 number 了
 * type TsType2 = { [x: number]: any; }
 */
type TsType2 = {
  [P in TsUnionType as number]: any;
};
```

### as + extends + in + keyof

所用到的知识点：

- keyof 解构
- in 遍历
- extends 判断
- as 转换

```ts
// 排除特定属性名
type OmitProp<T, R> = {
  [K in keyof T as K extends R ? never : K]: T[K];
  // [K in keyof T as (K extends R ? never : K)]: T[K];
};

// 排除特定属性值
type OmitValue<T, R> = {
  [K in keyof T as T[K] extends R ? never : K]: T[K];
  // [K in keyof T as (T[K] extends R ? never : K)]: T[K];
};

type IOrigin = {
  a: string;
  b: boolean;
  c: number;
  d: string;
};

/**
 * 排除属性名的类型为 "c" | "d" 的属性
 * type IWithoutProp = { a: string; b: string; }
 */
type IWithoutProp = OmitProp<IOrigin, 'c' | 'd'>;

/**
 * 排除属性值的类型为 string | boolean 的属性
 * type IWithoutValue = { c: number; }
 */
type IWithoutValue = OmitValue<IOrigin, string | boolean>;
```

## infer

infer 最早出现在此 [PR](https://github.com/Microsoft/TypeScript/pull/21496) 中，表示在 extends 条件语句中待推断的类型变量。

```ts
type ParamType<T> = T extends (arg: infer P) => any ? P : T;
```

在这个条件语句 `T extends (arg: infer P) => any ? P : T 中，infer P` 表示待推断的函数参数。

整句表示为：如果 `T` 能赋值给 `(arg: infer P) => any`，则结果是 `(arg: infer P) => any` 类型中的参数 `P`，否则返回为 `T`。

```ts
interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string
```

## is

`is` 操作符用于 TS 的类型谓词中，是实现 `TS` 类型保护的一种方式（关于什么是类型保护）。
比如下面这种场景：

```ts
function doSometing(value: string | number) {
  if (typeof value === 'string') {
    // TS 可以识别这个分支中 value 是 string 类型的参数（这就叫类型保护）
    // do something
  } else {
    // TS 可以识别这个分支中 value 是 number 类型的参数
    // do something
  }
}
```

复制代码除去上面这种方式以外，我们可以使用 TS 的类型谓词来实现：

```ts
/**
 * 此函数用于判断参数 value 是不是 string 类型
 *
 * 由于返回类型声明了类型谓词，可以帮助TS在代码分支中进行类型保护（默认返回 boolean 类型是没办法做到的）
 **/
function isString(value: any): value is string {
  return typeof value === 'string';
}

function doSometing(value: string | number) {
  if (isString(value)) {
    // TS 可以识别这个分支中 value 是 string 类型的参数（这就叫类型保护）
  } else {
    // TS 可以识别这个分支中 value 是 number 类型的参数
  }
}
```

复制代码这样做的好处是：实现了代码复用，实现了更好的语义化。其实，`TS` 代码中 `Array.isArray` 便是使用了这样的声明。

```ts
interface ArrayConstructor {
  // ...
  isArray(arg: any): arg is Array<any>;
}
```

## Never
程序语言的设计确实应该存在一个底部类型的概念，当你在分析代码流的时候，这会是一个理所当然存在的类型。TypeScript 就是这样一种分析代码流的语言（😎），因此它需要一个可靠的，代表永远不会发生的类型。
`never` 类型是 `TypeScript` 中的底层类型。它自然被分配的一些例子：

一个从来不会有返回值的函数（如：如果函数内含有 `while(true) {}`）；
一个总是会抛出错误的函数（如：`function foo() { throw new Error('Not Implemented') }`，`foo` 的返回类型是 `never`）；
你也可以将它用做类型注解：
``` ts
let foo: never; // ok
```
但是，`never` 类型仅能被赋值给另外一个 `never`：
```ts
let foo: never = 123; // Error: number 类型不能赋值给 never 类型

// ok, 作为函数返回类型的 never
let bar: never = (() => {
  throw new Error('Throw my hands in the air like I just dont care');
})();
```
很棒，现在让我们看看它的关键用例。
``` ts
#用例：详细的检查
function foo(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  // 如果不是一个 never 类型，这会报错：
  // - 不是所有条件都有返回值 （严格模式下）
  // - 或者检查到无法访问的代码
  // 但是由于 TypeScript 理解 `fail` 函数返回为 `never` 类型
  // 它可以让你调用它，因为你可能会在运行时用它来做安全或者详细的检查。
  return fail('Unexhaustive');
}

function fail(message: string): never {
  throw new Error(message);
}
```
`never` 仅能被赋值给另外一个 `never` 类型，因此你可以用它来进行编译时的全面的检查，我们将会在辨析联合类型中讲解它。

## 与 void 的差异
一旦有人告诉你，`never` 表示一个从来不会优雅的返回的函数时，你可能马上就会想到与此类似的 `void`，然而实际上，`void` 表示没有任何类型，`never` 表示永远不存在的值的类型。

当一个函数返回空值时，它的返回值为 void 类型，但是，当一个函数永不返回时（或者总是抛出错误），它的返回值为 `never` 类型。`void` 类型可以被赋值（在 `strictNullChecking` 为 `false` 时），但是除了 `never` 本身以外，其他任何类型不能赋值给 `never`。