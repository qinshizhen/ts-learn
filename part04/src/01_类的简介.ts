// 使用class关键字来定义一个类
class Person {
    /**
     * 定义实例属性
     * 需要通过对象的实例去访问
     * readonly 只读，无法修改
     */
    name: string = "孙悟空";
    readonly age: number = 19;  

    /**
     * 静态属性（类属性）
     * 用关键字 static
     * 可以直接通过类访问  Person.money
     */
    static money: number = 100;
    static readonly money2: number = 100;

    /**
     * 定义方法
     * static 静态方法（类方法）
     */
    sayHello() {
        console.log('hello everyone');
    };
    static sayHi() {
        console.log('hello everyone');
    };
}

const person = new Person();
Person.money = 2
console.log(Person.money);

