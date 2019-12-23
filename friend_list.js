let readline = require('readline-sync');
let str= " ";
let friendArray = [];

while (str != "exit") {
    let str = readline.question("\nEnter a friend or 'exit' to quit: ");
    if (str == "exit") {
        break;
    }
    friendArray.push(str);
}

console.log("Friend List");
for (let f of friendArray) {
    console.log(f);
}

console.log("\nbye!");