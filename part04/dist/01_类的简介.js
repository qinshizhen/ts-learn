"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        /**
         * 定义实例属性
         * 需要通过对象的实例去访问
         * readonly 只读，无法修改
         */
        this.name = "孙悟空";
        this.age = 19;
    }
    /**
     * 定义方法
     * static 静态方法（类方法）
     */
    sayHello() {
        console.log('hello everyone');
    }
    ;
    static sayHi() {
        console.log('hello everyone');
    }
    ;
}
/**
 * 静态属性（类属性）
 * 用关键字 static
 * 可以直接通过类访问  Person.money
 */
Person.money = 100;
Person.money2 = 100;
const person = new Person();
Person.money = 2;
console.log(Person.money);
