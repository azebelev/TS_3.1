

enum btnType {
	Plus = '+',
	Minus = '-'
}

function sendType(type: btnType) {
	const counterPlus = document.querySelector('#counterPlus')
	const counterMinus = document.querySelector('#counterMinus')

	const body = JSON.stringify({ btnType: type })

	fetch('http://localhost:3000/', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	}).then(res => res.json())
		.then(response => {
			if (counterMinus) {
				counterMinus.innerHTML = response.counterMinus
			}
			if (counterPlus) {
				counterPlus.innerHTML = response.counterPlus
			}

		})
}