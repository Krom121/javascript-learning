// Arrays Methods Dimension concat.

/** Arrays can be created using literal notation. You can simply declare a new variable and assign the data in the [] brackets. The data in brackets can be any data type you want: strings, numbers, booleans and even arrays themselves: */

var myArray = [1, 2, "banana", "apple"];
console.log(myArray);

// Constuctor Array.

var cities = new Array("Zagreb", "Dublin", "New York", "London");
console.log(cities);

// Literal Notation
// Literal notation is the preferred way of creating arrays.

// Array Methods - Push & Pop
/** We are not going to be able to look at all the methods, only the basic ones. Let’s say you want to add more items to an array. You created your grocery list, you thought you were done, but then you remembered to add one more item. How can you do this in JavaScript? Easy peasy. Just use push method: */

var myArray = ["milk", "bread", "chocolate"];
myArray.push("juice");
console.log(myArray);

// Using Pop

var myArray = ["milk", "bread", "chocolate", "juice"];
myArray.pop();
console.log(myArray);

// Array Methods - Shift & Unshift
// shift removes first item
// unshift adds new item to the begining

var myArray  = ["milk", "bread", "chocolate", "juice"];
myArray.shift();
console.log(myArray);

myArray.unshift("flour");
console.log(myArray);

// Array Methods - Reverse

/** The reverse() method reverses the order of items in the array. The first item will be last, the last will be the first and so on: */

var myArray = ["milk", "bread", "chocolate"];
console.log(myArray.reverse());

/** The slice() method takes two arguments; the start point and end point. The end point is not included in the result. These two points represent indices in an array. Don’t forget that original array is not changed. Instead, slice method returns the result in the form of a new array. It doesn’t affect the original one: */


// Array Methods - Sort

/** The sort() method sorts the items in an array in ascending and alphabetical order. Unicode code points are used rather than the Roman/Arabic characters themselves. If you have several strings, sort method will sort them alphabetically. If there are numbers, they will be sorted from lowest to highest. However as unicode code points are used they are ordered by the first charcter in the number.  */


var styles = ["jazz", "rock", "hiphop", "rap"];

console.log(styles.sort());

var numbers = [4,3,5,9,6,2,1];
console.log(numbers.sort());

// Array Methods - Fill

var myArray = ["milk", "bread", "chocolate"];
/* "milk was replaced with "banana" */
myArray[0] = "banana";
console.log(myArray);

// Concatenating Arrays

var firstLetters = ["a", "b", "c"];
var lastLetters = ["x", "y", "z"];
/* First we added firstLetters arrary to lastLetters... */ 
var newArray1 = firstLetters.concat(lastLetters);

/* and then we added lastLetters to firstLetters */
var newArray2 = lastLetters.concat(firstLetters);
console.log(newArray1);
console.log(newArray2);

// Multidimensional Arrays

var twoDimensionalArray =[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
console.log(twoDimensionalArray);
console.log(twoDimensionalArray[0][2]);

var places = ["home", "shop", "pub", "chippy", "c"];
var placeString = places.toString();

console.log(placeString);

typeof(placeString);

// Using Join

var languages = [ 'javascript', 'python', 'ruby', 'java', 'c' ];

var noDelimiter = languages.join("");
var withComma = languages.join(",");
var withSpace = languages.join(" ");
var withNumber = languages.join(" 1 ");
var withWord = languages.join(" and ");


console.log("without delimiter: " + noDelimiter);
console.log("with comma: " + withComma);
console.log("with space: " + withSpace);
console.log("with number: " + withNumber);
console.log("with word: " + withWord);


// For Loops And Arrays

var sports = ["basketball", "football", "tennis", "chess"];

for (var i = 0; i < sports.length; i++) {
	console.log(sports[i]);
}