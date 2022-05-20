// 接口 interface
// const screenResume = (name: string, age: number, bust: number) => {
//     age < 24 && bust >= 90 && console.log(`${name} 进入面试`) 
//     age >= 24 || bust < 90 && console.log(`${name} 你被淘汰`) 
// }
// screenResume('大脚', 18, 90)


// 接口必须是一个对象，类型别名可以赋值单个
type Girl2 = string
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;  // 可选
    [propname: string]: any;
    say(): string;
}

const girl = {
    name: '大脚',
    age: 19,
    bust: 99,
    hhh: 'aaa',
    say: () => 'welcome'
}

// 接口限制类
const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(`${girl.name} 进入面试`) 
    girl.age >= 24 || girl.bust < 90 && console.log(`${girl.name} 你被淘汰`) 
    girl.waistline && console.log(`${girl.name}腰围是: ${girl.waistline}`)
}
screenResume(girl)

// 接口限制类
class Women implements Girl {
    name = 'dajiao';
    age = 10;
    bust = 90;
    say() {
        return 'welcome'
    }
}

// 接口继承
interface Teacher extends Girl {
    teach(): string;
}