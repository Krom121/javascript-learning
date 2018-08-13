// Object-Orientated Concepts

/** The first thing you need to know about the objects is that they are essential. If you want to build apps with JavaScript, you must know objects perfectly. You cannot be a JavaScript developer without using objects. So no pressure.

Almost everything in JavaScript is an object whether you see it immediately or not. As we are going to show you, objects have data stored in key-value pairs. Objects are used to mimic things in the real world. You see something in the real world, and you want to code in JavaScript. Well, you better use objects! That fabulous car you are dreaming about can be written as a JavaScript object: */

var car = {
	owner: "me",
	name: "speedy",
	year: 2017,
	wheels: 4
};

// Objects

var country = {
	name: "Croatia",
	population: 4.224,
	sea: true,
	islands: 1000,
	language: "croatian",
	bio: function() {
		console.log(this.name + " is a country with " + this.population + " people");
	}
};

country.bio();

// Constructor Function - Part One

function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	this.speak = function () {
		return `vrooooooom!`;
	};
}

let myCar = new Car("1965", "Ann", "Ford");
myCar.speak();
console.log(myCar.year, myCar.owner);

// Overriding

function saySomething(){
	console.log("Something!");
}

function saySomething() {
	console.log("Something else");
}

saySomething();

// Prototypes

const animal = {
	init: function(type) {
		this.type = type;
	},
	
	say: function() {
		console.log(`I am a ${this.type}`);
	}
};

let dog = Object.create(animal);
dog.init("dog");
dog.say();

let cat = Object.create(animal);
cat.init("cat");
cat.say();

let mouse = Object.create(animal);
mouse.init("mouse");
mouse.say();

// class 

/*class Person {
	constructor(name, city) {
		this.name = name;
		this.city = city;
	}
}

let bob = new Person("bob", "London");
bob;*/

class Person {
	constructor(name, city) {
		this.name = name;
		this.city = city;
	}
	
	sayItOutLoud() {
		return `My name is: ${this.name} and I am from ${this.city}`;
	}
}

let bob = new Person("bob", "London");
bob.sayItOutLoud();