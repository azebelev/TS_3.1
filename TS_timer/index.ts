import express, { Request, Response } from 'express'
const app = express()

let counterPlus = 0
let counterMinus = 0
app.use(express.static('public'));
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
	enum Btype {
		Plus = '+',
		Minus = '-'
	}
	const btnType: Btype.Plus | Btype.Minus = req.body.btnType;
	(btnType === Btype.Plus) ? counterPlus++ : counterMinus++
	res.send({ counterPlus, counterMinus })
})

app.listen(3000, () => {
	console.log(`serving on port : ${3000}`)
})
