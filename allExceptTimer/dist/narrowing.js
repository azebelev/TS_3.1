"use strict";
//Есть функция.Она принимает некий объект А, у которого есть поля со значениями
// - или undefined 
// - или объекта с одним полем cvalue, который 
//      либо undefined 
//      либо по типу равный 
//           либо строке, 
//           либо числу, 
//           либо ссылке на объект по своей структуре/описанию подобный описываемому объекту А.
// ...Функция должна вернуть сумму "значений" поля cvalue всех полей объекта, притом,
// - если у очередного элемента поле сvalue - это число, 
//   то просто добавляем это число.
// - если у очередного элемента поле сvalue - это строка, 
//   то просто конвертим строку в число и добавляем.
// - если у очередного элемента поле cvalue - это объект подобный корневому, 
//   то добавляем сумму его полей (привет рекурсия)
// - если мы натыкаемся на undefined, или же если cvalue был строкой которая по факту не являлась адекватным числом - 
//   то тогда значением будет 2022.
function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (typeof elem === undefined)
            return 2022;
        if (elem === null || elem === void 0 ? void 0 : elem.cvalue) {
            if (typeof elem.cvalue === 'string') {
                return +elem.cvalue || 2022;
            }
            if (typeof elem.cvalue === 'number')
                return elem.cvalue;
            if (typeof elem.cvalue === 'object' && elem.cvalue !== null)
                return summ(elem.cvalue);
        }
        else
            return 2022;
    });
    var sum = 0;
    if (x) {
        for (var i = 0; i < x.length; i++) {
            sum += x[i];
        }
    }
    return sum;
}
var o = {
    b: { cvalue: 10 },
    c: { cvalue: '10' },
    d: { cvalue: undefined }
};
var obj = {
    a: undefined,
    b: { cvalue: 10 },
    c: { cvalue: '10' },
    d: { cvalue: undefined },
    e: { cvalue: o },
};
console.log(summ(obj));
