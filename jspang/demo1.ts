/**
 * 联合类型 string | number
 * 类型保护
 *  - 类型断言 as
 *  - in
 *  - typeof
 *  - instanceof 只能用在类上
 */

interface Waiter {
    anjiao: boolean;
    say: () => {}
}
interface Teacher {
    anjiao: boolean;
    skill: () => {}
}
function judgeWho(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Teacher).say()
    }
}

function judgeWho2(animal: Waiter | Teacher) {
    if ('skill' in animal) {
        animal.skill()
    } else {
        animal.say()
    }
}

function add (first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
}

class NumberObj {
    count: number;
    constructor(count: number) {
        this.count = count
    }
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
}

