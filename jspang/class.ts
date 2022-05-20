class Lady {
    content = 'hi, boy';
    sayHello() {
        return this.content
    }
}

const Jane = new Lady()
console.log(Jane.sayHello());

// 继承
class OneLady extends Lady {
    sayLove() {
        return 'i love you'
    }

    // 重写
    sayHello(): string {
        // 调用父类的方法用 super 关键字
        return `${super.sayHello}hi honey`
    }
}

/**
 * 类的访问类型
 * public
 * private
 * protected
 */
class Person {
    // 默认 public 在哪都可以访问
    public name: string; 
    // 私有的 只能在类的内部访问
    private age: number;
    // 受保护的 只能在类的内部和继承的子类内访问
    protected height: number;
    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}


/**
 * 类的构造函数 类在初始化的时候被调用的方法 也就是创建实例的时候
 * getter 
 * setter 
 * static
 */
class Animal {
    // public name: string;
    // constructor(name: string) {
    //     this.name = name
    // }
    constructor(public name: string) {
        this.name = name
    }

    // getter setter static
    private _gender: string;
    get gender() {
        return this._gender
    }
    set gender(value: string) {
        this._gender = value
    }
}
class Cat extends Animal { 
    constructor(public age: number) {
        // 子类写构造函数，得写 super()
        super('tom')
        this.age = age
    }
}
const person = new Animal('tom')
console.log(person.name);

/**
 * 静态类
 * 可以直接通过类访问
 */
class SuperMan {
    static can() {
        return 'fly'
    }
}
console.log(SuperMan.can());

/**
 * 只读属性
 */
class A {
    public readonly _name: string;
    constructor(public readonly name: string) {
        this._name = name;
    }
}
let a = new A('aa');
// a.name = 'aaa'
console.log(a.name);


/**
 * 抽象类
 */
abstract class Boy {
    abstract skill(): string
}
class ABoy extends Boy {
    skill(): string {
        return 'run'
    }
}
