/**
 * 泛型
 *  - 语法 <>
 */

/**
 * 函数中
 */

// function join(first: string | number, second: string | number) {
//     return `${first}${second}`
// }
// join('a', 2);

// function join<T>(first: T, second: T) {
function join<T, K>(first: T, second: K) { // 多个泛型
    return `${first}${second}`
}
// join<string | number>('a', 2);
// join<string>('a', '2');
join<string, number>('a', 2);
join('a', 2); // 泛型支持类型推断


/**
 * 泛型 - 数组
 */
// function myFun<T> (params: T[]) {
function myFun<T>(params: Array<T>) {
    return params
}
myFun<string>(['1', '2']);

/**
 * 类中
 */

// class SelectG {
//     // constructor(private g: string[]) {}
//     constructor(private g: string[] | number[]) {}
//     getG(index: number):string | number {
//         return this.g[index]
//     }
// }
// const selectG = new SelectG(['a', 'b', 'c'])
// console.log(selectG.getG(1));

// 使用泛型
// class SelectG<T> {
//     // constructor(private g: string[]) {}
//     constructor(private g: T[]) {}
//     getG(index: number): T {
//         return this.g[index]
//     }
// }
// const selectG = new SelectG<string>(['a', 'b', 'c'])
// console.log(selectG.getG(1));

// 泛型中的继承
interface G {
    name: string
}
class SelectG<T extends G> {
    constructor(private g: T[]) { }
    getG(index: number): string {
        return this.g[index].name
    }
}
const selectG = new SelectG([
    { name: '大脚' }
])
console.log(selectG.getG(1));

/**
 * 泛型的约束
 *  - class SelectG<T extends string | number> {}  约束泛型只能是 string | number
 */