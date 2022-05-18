"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this.age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *  - 它们被称为属性的存取器
         */
        // 定义方法，获取name属性
        // getName() {
        //     return this.name;
        // }
        // 设置name属性
        // setName(value: string) {
        //     this.name = value
        // }
        /**
         * TS 中设置getter方法的方式
         */
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const per = new Person("孙悟空", 1);
    // console.log(per.getName());
    // console.log(per.setName('aaa'));
    console.log(per);
    console.log(per.name);
    per.name = '猪八戒';
    console.log(per.name);
    /**
     * 现在属性是在对象中设置的，属性可以任意被修改
     *  属性可以任意被修改将会导致对象中的数据变得非常不安全
     */
    // per.name = '猪八戒';
    // per.age = 12;
    // console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 33;
    // class C {
    //     name: string;
    //     age: number;
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age
    //     }
    // }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 1);
    console.log(c);
})();
