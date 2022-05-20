// type annotation 类型注解

// 工作使用问题
// - 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// - 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// function sayHello(): void {
//     console.log("Hello World");
// }
// function errorFunction(): never {
//     throw new Error()
//     console.log("Hello World");
// }
// function forNever(): never {
//     while (true) {}
//     console.log("Hello World");
// }


function add ({ one }: {one: number}) {
    return one
}
const total = add({ one: 1 })
function add2 ({ one, two }: {one: number, two: number}) {
    return one + two
}
const total2 = add2({ one: 1, two: 2 })
console.log(total2);


// type inference 类型推断

const arr = [1, 2, 'a'];
// const arr: (number | string)[] = [1, 2, 'a'];

// 类型别名 type alias
type Lady = {
    name: string;
    age: number;
}
class MaDam {
    name: string;
    age: number;
}
const xjjs: Lady[] = [
    {name: 'a', age: 19},
    {name: 'b', age: 18},
]
const xjjss: MaDam[] = [
    {name: 'a', age: 19},
    {name: 'b', age: 18},
]
const xiaojiejies: {
    name: string;
    age: number;
}[] = [
    {name: 'a', age: 19},
    {name: 'b', age: 18},
]


// 元组
const xiaojiejie: [string, string, number] = ['大脚', 'teacher', 18]