/**
 * TS 中的类型
 * 原始数据类型包括：
 * 布尔值、数值、字符串、null、undefined 以及 
 * ES6 中的新类型 Symbol 和 
 * ES10 中的新类型 BigInt。
*/
// .1 number
let num: number;
// let num = 10;

// .2 string
let str: string;
// let str = 'abc';

// .3 boolean
let bol: boolean;
// let bol = true;

// .4 字面量 可以用 | 连接多个类型
let zml: 'male' | 'female';
zml = 'male';
zml = 'female';
// zml = 11; // 代码报错


// .5 any 任意类型：一个变量设置类型为 any 后相当于对该变量关闭了 TS 的类型检测
let any: any;
// let any;
let s: string;
s = any;  // any的类型是any，它可以赋值给任意变量

// .6 unknown 表示未知类型的值
let unknown: unknown;
let ss = 'hello';
// ss = unknown; // 代码报错 unknown 实际上是一个类型安全的any，不能直接赋值给其他变量
if ( unknown === "string" ) {
    ss = unknown;
}

// 类型断言，可以用来告诉解析器变量的实际类型
/**
 * 语法
 * 变量 as 类型
 * <类型>变量
*/
ss = unknown as string;
ss = <string>unknown;

// .7 void 用来表示空，以函数为例，就表示没有返回值的函数
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
function fn(): void {
    // return null;
    // return undefined;
    // return 10; // 报错
}

// .8 never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错啦！');
}

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// .9 null
let n: null = null;
// .10 undefined
let u: undefined = undefined;

// 这样不会报错
let num2: number = undefined;
// 这样也不会报错
let u2: undefined;
let num3: number = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：
let u3: void;
let num4: number = u;
// Type 'void' is not assignable to type 'number'.