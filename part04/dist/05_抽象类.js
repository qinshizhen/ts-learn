"use strict";
(function () {
    /**
     * 以 abstract 开头的类是抽象类
     *  抽象类和其他类区别不大，只是不能用来创建对象
     *  抽象类就是专门用来做继承的类
     *
     *  抽象类中可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪~");
        }
    }
    // 以 abstract 开头的类是抽象类 抽象类和其他类区别不大，只是不能用来创建对象 抽象类就是专门用来做继承的类
    // 抽象类中可以添加抽象方法
    // const a = new Animal()
    const dog = new Dog('旺财');
    console.log(dog);
    dog.sayHello();
})();
