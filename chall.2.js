var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike);

if(scoreJohn > scoreMike){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if( scoreMike > scoreJohn){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}