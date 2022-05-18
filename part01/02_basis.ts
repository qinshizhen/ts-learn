// 声明一个变量a，同时指定它的类型为number
let a: number;
a = 10;
// a = '111'; 代码会报错

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let b = false; // let b: boolean = false;

// JS的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, '456', 789));   // '123456'

// TS 函数返回值类型
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(123, 456));
// console.log(sum(123, '456')); // 代码会报错
// console.log(sum(123, 456, 789)); // 代码会报错
let res = sum(1, 2);


