// Functions

/** Functions are one of the core concepts in every programming language. Functions are needed because they allow code reuse. Imagine that you want to multiply two numbers. What would happen if you have to write the same code over and over again a * b? It is better to write it once, wrap it in a function and then call it whenever you need it. There is probably going to be more logic and more laborious coding in functions than simple multiplication.

It would be super complicated if a developer had to repeat all that logic each time she/he needs to achieve some task. Functions enable us to think about the problem once, create a solution, store the solution in the functions and then reuse that solution whenever we come to the same problem. Cool, right? It is a magic word that solves a problem. You come across two numbers, you want to multiply them, you just shout multiply() and bam! Two numbers are multiplied! */

function multiply(a, b){
	// The function takes two parameters a and b
    // and returns the product 
	return a * b; 
}

// Call the multiply function with the arguments 10 and 2.
// 10 becomes the value of a and 2 becomes the value of b.
multiply(10, 2); // you might want to try this with other numbers 


// Function Declarations

function hello(){ // function keyword and the name of the function
	console.log("hello!"); // code block
}

hello(); // calling the function. It triggers the function

let language = "Javascript";
console.log(language);

// Callbacks

function ask(question, good, bad) {
    if (confirm(question)) {
        good();
    }
    else { 
        bad();
    }
  }
  
  function yes() {
    console.log( "Glad to hear that!" );
  }
  
  function no() {
    console.log( "Sorry to hear that" );
  }
  
  ask("Are you ok?", yes, no);
  
  
  // remove comments and run each of these calls one by one
  // ask("Are you ok?", no, no);
  // ask("Are you ok?", yes, yes);
  // ask("Are you ok?", no, yes);

  