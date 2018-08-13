// strings strings escaping strings method.

/** Strings are fundamental in a developer’s life. Wherever there is a textual data, you are going to need to use strings; first name, last name, city, occupation etc. are all going to represented as strings. There are two types of quotations in JavaScript: single and double quotes. There is no difference in this example between these quotes, meaning the result will be the same. You can use both single and double quotes as long as you don’t mix them up.
 */

// New Line Escaping 

/** When working with text, sometimes we may need to create a line-break, separate paragraphs or other pieces of text. We can do this using either, the newline character (\n) or the return character (\r) */

console.log("What\na\nbeautiful\nday");
console.log("what\ra\rbeautiful\rday");

// tab escaping.
/** Sometimes we may need to use a tab, or indent, to denote a new paragraph or some piece of information. In this case, we would use \t */

console.log(("Welcome\tto\tthe\tworld\tof\tjavascript!"));

// Template Literals.

/**  One of the main differences between escape characters and template literals is that knowing how to use escape characters will help you in most languages whereas not every language will contain an equivalent of template literals */

console.log(`She said: "Javascript is fun!" and then: 'Everything seems possible now!'`);

// STRING METHODS

/** Use name of the method on the string object. Add string methods after the string object –

string.nameOfTheMethod(); */

var myString = "I am cool string";
console.log(myString.indexOf("c"));

var myString = "I am cool string";
console.log(myString.lastIndexOf("c"));

// Slice Method

var myString = "Creativity";
myString.slice(1,7);

// STRING METHOD 

var myString = "I am String";
var lowercasedString = myString.toLowerCase();
var uppercaseString = myString.toUpperCase();

console.log(lowercasedString);
console.log(uppercaseString);

var myString = "I am very cool string";
console.log(myString.length);

var myString = "Hello!";

console.log(myString.repeat(3));

// String Concatenation

var firstString = "I am";
var secondString = " in love with javascript";
var newString = firstString + secondString;

console.log(newString)

var str1 = "Hello ";
var str2 = "there! ";
var str3 = "What a beautiful day to learn javascript";

console.log(str1.concat(str2, str3));

// String Interpolation

var leftSide = 10;
var rightSide = 20;

console.log("left side is equal to " + leftSide + " and right side is equal to " + rightSide);