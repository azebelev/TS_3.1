// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string),
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1,
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :)
// нас интересует только ее сигнатура.

function transform<T extends { id?: string, [key: string]: any }>(x: T, func: (y: Partial<T>) => T) {

}

// Напишите сигнатуру функции, которая принимает
// - некий класс
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
	w!: number;
	h!: number;
}
class Circle {
	radius!: number;
}

function cloneClassObj<T>(obj: { new(): T }, count: number): T[] {
	const arrayObj: Array<T> = []
	for (let i = 0; i < count; i++) {
		arrayObj.push(new obj())
	}
	return arrayObj
}

console.log(cloneClassObj(Rectangle, 10)[5])
console.log(cloneClassObj(Circle, 10))