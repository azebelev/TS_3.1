// // задача 1: создайте тип AnyButtonType, который описывает все вариации кнопок
// type AnyButtonType = ...; // только без копипасты литералов, пожалуйста

// // задача 2: создайте тип ConfirmationHandlingFormButton
// // т.е. подтип формовых кнопок, которые ещё содержат поле onConfirm, в котором
// // может лежать функция, которая вызывается с параметром типа DialogButtonType
// // (и ничего не возвращает)
// // Т.е. предполагается что у кнопки такого типа, если поле onConfirm пустое, 
// // то при нажатии на эту кнопку сразу происходит действие
// // а иначе вызывается диалог Подтверждения, и результат нажатия на кнопку Да или Нет
// // в итоге попадет в функцию onConfirm, которая уже дальше решит что делать
// type ConfirmationHandlingFormButton = ...;


type DialogButtonType = "Yes" | "No";

interface FormButton {
	type: "Add" | "Remove" | "Buy"
}

type AnyButtonType = {
	type: FormButton['type'],
	action: DialogButtonType
}

const button: AnyButtonType = {
	type: 'Add',
	action: 'Yes'
}

// type AnyButtonType = {
// 	[key in FormButton['type']]?:DialogButtonType;
// }

// const button:AnyButtonType = {
// 	Add:'Yes'
// }


type ConfirmationHandlingFormButton = AnyButtonType & {
	onConfirm?: ((action: DialogButtonType) => void)
}