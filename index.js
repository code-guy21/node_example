const { addNumbers, multiplyNumbers } = require('./math');
const inquirer = require('inquirer');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'enter the first number',
			name: 'numberOne',
		},
		{
			type: 'input',
			message: 'enter the second number',
			name: 'numberTwo',
		},
		{
			type: 'list',
			message: 'select an option',
			name: 'operation',
			choices: ['add', 'multiply'],
		},
	])
	.then(answers => {
		if (answers.operation === 'add') {
			let sum = addNumbers(answers.numberOne, answers.numberTwo);
			console.log('sum=' + sum);
		} else if (answers.operation === 'multiply') {
			let product = multiplyNumbers(answers.numberOne, answers.numberTwo);
			console.log('product=' + product);
		}
	})
	.catch(error => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});

// let numbers = [
// 	{ num1: 5, num2: 8, operation: 'add' },
// 	{ num1: 8, num2: 3, operation: 'multiply' },
// 	{ num1: 3, num2: 2, operation: 'add' },
// 	{ num1: 7, num2: 2, operation: 'multiply' },
// ];

// for (let i = 0; i < numbers.length; i++) {
// 	let pair = numbers[i];

// 	if (pair.operation === 'add') {
// 		let sum = addNumbers(pair.num1, pair.num2);
// 		console.log('sum=' + sum);
// 	} else if (pair.operation === 'multiply') {
// 		let product = multiplyNumbers(pair.num1, pair.num2);
// 		console.log('product=' + product);
// 	}
// }

// let mySum = addNumbers(5, 8);
// let mySum2 = addNumbers(6, 8);
// let mySum3 = addNumbers(8, 5);
// let mySum4 = addNumbers(2, 4);
// let myProduct = multiplyNumbers(10, 5);

// console.log(mySum);
// console.log(myProduct);
