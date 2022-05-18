(function() {

    // // 定义一个表示狗的类
    // class Dog {
    //     name: string;
    //     age: number;

    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     sayHello() {
    //         console.log('汪汪汪');
    //     }
    // }

    // const dog = new Dog("旺财", 14);
    // console.log(dog);
    // dog.sayHello();

    // // 定义一个表示猫的类
    // class Cat {
    //     name: string;
    //     age: number;

    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     sayHello() {
    //         console.log('喵喵喵');
    //     }
    // }

    // const cat = new Cat('咪咪', 1);
    // console.log(cat);
    // cat.sayHello();




    
    // 定义一个Animal类
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('动物再叫~');
        }
    }
    /**
     *  extends 继承类
     *  Dog extends Animal
     *  - 此时，Animal 被称为父类，Dog被称为子类
     *  - 使用继承后，子类将会用父类所有的属性和方法
     *  - 通过继承可以将多个类中的共有代码写在一个父类中
     *      - 这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     *      - 如果希望在子类中添加一些父类中没有的属性或方法直接加就行
     *  - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖点父类方法
     *      - 这种子类覆盖掉父类方法的形式，我们称为 方法重写
     */
    class Dog extends Animal {
        
        run() {
            console.log(`${this.name}在run~~~~`);
        }

        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {

    }
    const dog = new Dog("旺财", 14);
    console.log(dog);
    dog.sayHello();
    const cat = new Cat('咪咪', 1);
    console.log(cat);
    cat.sayHello();

})()