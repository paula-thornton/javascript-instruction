let readline = require('readline-sync');

console.log("Readline demo app!");
console.log("Get some input from the console...");

let str = readline.question('\nEnter a string: ');
console.log("You entered " + str);

let n1 = readline.questionInt('\nEnter a whole #: ');
console.log("your number squared = " + n1*n1);

let d1 = readline.questionFloat('\nEnter a decimal #: ');
console.log("Dec / nbr = " + d1/n1);
