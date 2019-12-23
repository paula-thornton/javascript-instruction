console.log("Welcome to the Squares and Cubes Table");
console.log();  // print a blank line

let readline = require('readline-sync');
let choice = "y";

//while (String(choice).valueOf() == String("y").valueOf()) {
while (choice == "y") {
    let n1 = readline.questionInt('\nEnter a whole #: ');
    console.log("n1 = " + n1);

    console.log("Number  Squared Cubed");
    console.log("======  ======= ======");

    for (let i=1; i<= n1; i++) {
        let iSquared = i * i;
        let iCubed = i * i * i;
        console.log(i + "\t" + iSquared + "\t" + iCubed);
    }
     
   choice = readline.question('\nContinue? (y/n): ');
 
}
