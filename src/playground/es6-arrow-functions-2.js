// arguments object - no longer bound with arrow functions
const add = function (a, b) {
	return a + b;
};
console.log(add(55, 45));

// const multiply = (a, b) => {
// 	// console.log(arguments); (doesn't work, arguments not bound)
// 	return a * b;
// };
// console.log(multiply(2,5));

//this keyword - no longer bound
const user = {
	name: 'Taylor',
	cities: ['Peru', 'Wabash', 'Logansport'],
	
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};
console.log(user.printPlacesLived());

// Challlenge area

const multiplier = {
	// numbers - array of numbers
	numbers: [10, 20, 30],
	// multiplyBy - single number
	multiplyBy: 3,
	// multiply - return a new array where teh numbers have been multiplied.
	multiply() {
		return this.numbers.map((n) => n * this.multiplyBy);
	}
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]