import {input} from './input.js'

const shellfishPositions = input
let largestNumber = Math.max(...shellfishPositions)
const totalFuelCostArray = []
while (largestNumber >= 0) {
	const fuelCostArray = []
	for (let j = 0; j < shellfishPositions.length; j++) {
		const fuelCost = Math.abs(largestNumber - shellfishPositions[j])
		const accFuelCost = Array.from({length: fuelCost}, (v, i) => i + 1)
		fuelCostArray.push(accFuelCost.reduce((a, b) => a + b, 0))
	}

	totalFuelCostArray.push(fuelCostArray.reduce((a, b) => a + b, 0))
	largestNumber--
}

console.log(Math.min(...totalFuelCostArray))