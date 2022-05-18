"use strict";
class Dog {
    /**
     * 构造函数
     * 会在对象创建时调用
     */
    constructor(name, age) {
        /**
         * 在实例方法中，this就表示当前的实例
         * 在构造函数中当前对象就是当前新建的那个对象
         * 可以通过 this 向新建的对象中添加属性
         */
        console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert('汪汪汪！');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog("小黑", 5);
dog.age = 333;
// const dog2 = new Dog();
// const dog3 = new Dog();
// const dog4 = new Dog();
console.log(dog);
// console.log(dog2);
// console.log(dog3);
// console.log(dog4);
