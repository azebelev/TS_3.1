// Напишите функцию mapObject, которая
// в чем - то очень похожа на функцию map для массивов.

// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта, 
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.

// Так например можно будет замэппить объект типа
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде(x) => x > 2
// чтобы получить объект
// { "roma": true, "vasya": false } зачетов студентов

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами - типами
// 2) такую штуку как Record(globalThis.Record, если быть точным ;) )

function mapObject<T extends object>(obj: T, transformer: (x: T[keyof T]) => any) {
	const newObj: Partial<Record<keyof T, any>> = {}
	for (let prop in obj) {
		newObj[prop] = transformer(obj[prop])
	}
	return newObj
}

const res = mapObject({ "roma": 5, "vasya": 2 }, (x) => x > 2)
console.log(res)

