
// object 表示一个js对象
let a: object;

// {} 用来指定对象中可以包含哪些属性
// 语法： { 属性名: 类型值, ... }
// 属性名后面加个 ? ,表示属性是可选属性
let b: { name: string, age?: number };
// b = {}; // 报错
b = { name: '熏悟空' }
// b = { name: '熏悟空', age: 13 } // 报错

// let c: { name: string };
// c = { name: '猪八戒', age: 19 } // 报错

// [propName: string]: any  表示任意类型的属性
let c: { name: string, [propName: string]: any };
c = { name: '猪八戒', age: 19 }


/**
 * 设置函数结构的类型声明
 * 语法： (形参: 类型, 形参: 类型) => 返回值
 */
let d: (a: number, b: number) => number;
d = function(n1: number, n2: number) {
    return n1 + n2
}


/**
 * array
 * string[] 表示字符串数组
 * number[] 表示数值数组
 * 
 * 语法
 *  类型[]
 *  Array<类型>
 */
let e: string[];  
let f: number[];
let g: Array<number>;

/**
 * 元组 tuple，就是固定长度的数组
 * 语法
 *  [类型, 类型]
 */
let h: [string, string];
h = ['a', 'b']
// h = ['a', 'b', 1] // 报错

/**
 * enum 枚举
 */
enum Gender {
    Male,
    Female
}
let i: { name: string, gender: Gender }
i = {
    name: '熏悟空',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male);

// & 表示同时
let j: { name: string } & { age: number };
j = { name: 'a', age: 1 };

/**
 * 类型的别名
 */
type myType = 1 | 2 | 3;
let k: myType;
let l: myType;




