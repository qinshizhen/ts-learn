// object 表示一个js对象
var a;
// {} 用来指定对象中可以包含哪些属性
// 语法： { 属性名: 类型值, ... }
// 属性名后面加个 ? ,表示属性是可选属性
var b;
// b = {}; // 报错
b = { name: '熏悟空' };
// b = { name: '熏悟空', age: 13 } // 报错
// let c: { name: string };
// c = { name: '猪八戒', age: 19 } // 报错
// [propName: string]: any  表示任意类型的属性
var c;
c = { name: '猪八戒', age: 19 };
/**
 * 设置函数结构的类型声明
 * 语法： (形参: 类型, 形参: 类型) => 返回值
 */
var d;
d = function (n1, n2) {
    return n1 + n2;
};
/**
 * array
 * string[] 表示字符串数组
 * number[] 表示数值数组
 *
 * 语法
 *  类型[]
 *  Array<类型>
 */
var e;
var f;
var g;
/**
 * 元组 tuple，就是固定长度的数组
 * 语法
 *  [类型, 类型]
 */
var h;
h = ['a', 'b'];
// h = ['a', 'b', 1] // 报错
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '熏悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
// & 表示同时
var j;
j = { name: 'a', age: 1 };
var k;
var l;
