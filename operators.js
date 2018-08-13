// Basic Operators.
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators.
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators.

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof Operator.

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);

// Operator Precedence.

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators

var isFullAge = now - yearJohn >= fullAge; // true.
console.log(isFullAge);

// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments.

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// The Ternary Operator and Switch Statements.

var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer'):console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement.

var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
}

 //age = 56;
switch(true) {
    case age < 13:
    console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man');
        break;
    default:
    console.log(firstName + ' is a man');
}

var sky = "blue";

if(sky == "blue") {
    console.log("nice weather");
} else {
    console.log("not nice weather");
}

