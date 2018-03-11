class Person {
	constructor(name='Anonymous', age=0, location) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		// Template string. Use back ticks.
		return `Hi.  I am ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation() {
		return !!this.homeLocation
	}
	getGreeting() {
		let greeting = super.getGreeting();

		if (this.homeLocation) {
			greeting += ` I am visiting from ${this.homeLocation}.`;
		}
		
		return greeting;
	}
}

const me = new Traveler('Forest Gump', 420, 'Niger');
console.log(me.getGreeting());

const you = new Traveler();
console.log(you.getGreeting());