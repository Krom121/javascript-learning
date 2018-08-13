/*Iterations are performed in loops. We are going to explain each loop in the following lessons. You can think of iteration as doing the same step over and over again until a certain condition is met. For example, you can tell the computer to take five steps in one direction until it gets home:

step.forward(5) until home;
This means step.forward(5) is going to repeat over and over again until it gets home.**/

// For Loops

/** for (statement 1; statement 2; statement 3) {

   code block to be executed

  } */

  var i;
  for(i = 0; i < 10; i++) {
    console.log("I am happy");
  }

  console.log("i out of the loop: " + i);

  // For Loops And Arrays

var sports = ["basketball", "football", "tennis", "chess"];

for (var i = 0; i < sports.length; i++) {
	console.log(sports[i]);
}

// While Loops

var i = 0;

while ( i < 10) {
	console.log("I am happy");
  i++;
}

// Do While Loops

var i = 0;
do {
    console.log("I am happy!");
    i++;
} while (i < 10);


var i = 0;
do {
    console.log("i is " + i + " and that is less than 10");
    i++;
} while (i < 10);

var i = 11;
do {
    console.log("i is " + i);
    i++;
} while (i < 10);