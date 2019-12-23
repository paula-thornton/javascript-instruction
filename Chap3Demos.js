// scope example
let x = 10;
if (true) {
    let y=20;
    var z = 30;
    console.log(x + y + z);
}
// console.log(y);  y is not visible here. this is why "var" is not used.
console.log(x+z);

// function examples
const square = function(x) {
    return x*x;
}
console.log(square(11));

console.log("add 5 and 7 = " + sumIt(5,7));
console.log("multiple 4 and 9 = " + product(4,9));

function sumIt(a, b) {
    return a + b;
}
function product(a, b){
    return a * b;
}


console.log("The min of 100 and 1000 is " + getMin(100, 1000));
let c = 20;
let d = 21;
console.log("The min of "+ c + " and " + d + " is " + getMin(c,d));

function getMin(a,b){
    if (a < b){
        return a;
    } else{
        return b;
    }
}

let number = 10;
let isNumberEven = isEven(number);
if (isNumberEven == true){
    console.log(number + " is even.");
}
else {
    console.log(number + " is odd.");
}

number = 15;
isNumberEven = isEven(number);
if (isNumberEven == true){
    console.log(number + " is even.");
}
else {
    console.log(number + " is odd.");
}

function isEven(a){
    let retValue = false;
    console.log("a = " + a);
    if (a-2 == 0) {
        retValue = true;
    } else if (a-2 == 1) {
        retValue = false;
    } else {
        a = a-2;
        retValue = isEven(a);
    }
    return retValue;
}