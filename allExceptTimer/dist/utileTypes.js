"use strict";
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string),
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.
function transform(x, func) {
}
// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    return Circle;
}());
function cloneClassObj(obj, count) {
    var arrayObj = [];
    for (var i = 0; i < count; i++) {
        arrayObj.push(new obj());
    }
    return arrayObj;
}
console.log(cloneClassObj(Rectangle, 10)[5]);
console.log(cloneClassObj(Circle, 10));
