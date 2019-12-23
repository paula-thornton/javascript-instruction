let readline = require('readline-sync');

let favThings = [];
let enterAnother = "y";
while (enterAnother == "y") {
    console.log("\n** Enter a favorite thing **");
    let id_in = readline.questionInt("Enter an ID : ");
    let fave_in = readline.question("Enter a favorite thing: ");
    let reason_in = readline.question('Why?: ');
    let ft = {id: id_in, fave: fave_in, reason: reason_in};
    console.log(ft);
    favThings.push(ft);
    id_in = id_in + 1;
    enterAnother = readline.question("\nEnter another favorite? (y/n): ");
}

console.log("\nMy list of favorites\n")
for (let favs of favThings) {
   // console.log(favs);
   // console.log("I like " + favs.fave + " because of " + favs.reason + ".");
   // console.log (`I like ${favs.fave} because of ${favs.reason}.`);
   displayFave(favs);
}

// 1) prompt user for id to review
// 2) get that favorite thing from the list and display
// 3) create a function for the display - reduce redundancy

let id_lookup = readline.questionInt("\nEnter 'favorite' ID to look up: ");
for (let favs of favThings) {
    if (favs.id == id_lookup) {
        displayFave(favs);
    }
}

function displayFave(favThing) {
    console.log (`I like ${favThing.id} - ${favThing.fave} because of ${favThing.reason}.`);
}

console.log("\nbye!");