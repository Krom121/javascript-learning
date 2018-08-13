/** Working with numbers number types number methods and object number variables. */

/*JavaScript reps numbers as
Whole numeric characters -47
Or in a fractional form using decimals
a  fundamental concept within JavaScript is an expression. An expression produces or results in some value. **/

/** Provides the foundation for every solution to every mathematical and/or logical problem devised */

// Core Arithmetic 

// subtraction

20 - 10;
console.log(20 -10);

// modulus is not how many time 10 is divided by 3 but the remainder.

10 % 3;
console.log(10 % 3);

// exponentiation rasing left operand to the power right operand.

3 ** 3;
console.log(3 ** 3);

/* Mathematical definitions:
Unary - consisting of or involving a single component or element.
Unary negation of 2 is the integer '-2' 
Operators that operate on a single value
These can be used by using the following operators: ++, --, + and 
**/

var a = 5;
a++;
console.log(a);

var b = 5;
b--;
console.log(b);

var c = 8;
var d = -c;
console.log(c);

/* Number is a data type in JavaScript 
Unlike other programming languages, JavaScript only has floating point numbers with double precision
**/

 // Floats

 0.1 + 0.2;
 console.log( 0.1 + 0.2);

 /** We can solve this problem by multiplying each number by 10, to convert it into an integer, and then divide the result by 10 again, to convert it back to floating point: */

 (0.1 * 10 + 0.2 * 10) / 10;
 console.log((0.1 * 10 + 0.2 * 10) / 10);

 // Super Small And Super Large Values

 /** It is a special notation for very large and very small numbers With letter e along with a value for number
 */

var a = 4e10;
console.log(a)

var b = 1e-6;
console.log(b);

/* toExponential() converts a number into exponential notation **/

// NUMBER METHODS AND OBJECTS.

/*** They are actions that can be performed on numbers. Add '.', method name & argument in parenthesis after object: object.nameOfTheMethod(argument); */

/** parseInt() parses a string and returns an integer

parseFloat() takes a string and returns floating point number */

console.log(
    parseInt("10"),
    parseInt("3.14"),
    parseInt("I am not a INTERGER") // NaN
);

console.log(
    parseFloat("10"),
    parseFloat("3.14"),
    parseFloat("Iam not a FLOAT")
);

/** toString() converts a number to a string

toFixed() converts a number to a string, but keeping only two decimals */

console.log(
    2.34345345.toFixed(5),
    2.33333.toFixed(1),
    1.1.toFixed(10)
);

var myNum = 85;
myNum.toString();
console.log(myNum);

/** isFinite(number) checks if the value in parenthesis is an actual number isInteger(number) checks if the value in parenthesis is an integer isNaN(number) checks if the value in parenthesis is NaN */

Number.isFinite(123);// true
Number.isFinite(-Infinity);// false
Number.isNaN(0 / 0); // NaN
Number.isNaN("a" * 3); // NaN
Number.isInteger(1); // true
Number.isInteger("banana"); // false


// Math Object

/** Math.floor rounds down the number. 2.1 will be 2
Math.ceil rounds up the number. 1.1 will be 2
Math.round rounds to the nearest integer. It means 1.4 will be 1, but 1.6 will be 2
Math.trunc removes the decimal part of the number. 4.5 will be 4
Math.sqrt returns the square root of the number
Math.cbrt returns the cube root of the number */

console.log(
    Math.floor(1.1),
    Math.ceil(1.1),
    Math.round(1.4),
    Math.trunc(1.1),
    Math.sqrt(81),
    Math.cbrt(64)
);

console.log(
    Math.trunc(15.2)
);

// Number Variables.

var a = 10;
console.log(a);

var a = 10;
console.log("A is: " + a);

var a = 15;
console.log("A is: " + a);

// same line

var a = 10; var b = 15; var c = 20;
console.log(a,b,c);