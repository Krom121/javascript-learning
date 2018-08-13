/*** Boolean Logic. AND (&&) => true if ALL are true.
 *  OR (||) => true if ONE is true.
 * NOT (!) => Inverts true/false value.
 ****/

var firstName = 'John';
var age = 20;

if(age < 13) {
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

// Boolean Operators And Conditionals

var fruit1 = "apple";
var fruit2 = "peach";

if (fruit1 == "apple" && fruit2 == "peach") {
	console.log("Yummy!");
}

if (fruit1 == "apple" || fruit2 == "banana") {
	console.log("Yummy")
}