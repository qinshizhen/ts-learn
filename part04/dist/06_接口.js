"use strict";
(function () {
    // type myType = {}  // 不能重复声明
    const obj = {
        name: '11',
        age: 111
    };
    console.log(obj);
    const obj1 = {
        name: '11',
        age: 111,
        gender: "male"
    };
    console.log(obj1);
    /**
     * 定义类时，可以使类去实现一个接口
     *  实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~');
        }
    }
})();
