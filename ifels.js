// If Else Statements.

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon. :)');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName +  ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

if (2 > 5) {
	console.log("If statement was executed!");
} else if (2 > 8) {
	console.log("else if statement was executed");
} else if (2 > 100) {
	console.log("second else if statement was executed");
} else if (2 > 10) {
	console.log("second else if statement was executed");
}  else {
	console.log("else statement was executed");
}