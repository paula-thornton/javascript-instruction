let letters =["a","b","c","d","e"];

console.log(letters);

for (let l of letters) {
    console.log(l);
}

// slice and concatenate
// 1st 2 letters + last 2
let l1 = letters.slice(0,2);
console.log("l1 = " + l1);

let l2 = letters.slice(3);
console.log("l2 = " + l2);

console.log(l1.concat(l2));

let nbrs = [1,5,3,7,9,13];
let sum = 0;
for (let i=0; i<nbrs.length; i++){
    sum += nbrs[i];
}
console.log("sum = " + sum);

let str = "How U doing?";
let str1 = str.split(" ");

console.log(str1);

console.log("Sum some numbers...");
console.log(sumIt(1,4,6,8));
console.log(sumIt(5,15));
console.log(sumIt(10,40,60,80));


function sumIt(...n) {    // can pass variable number of parameters
    let sum = 0;
    for (let nbr of n){
        sum += nbr;
    }
    return sum;
}

//let nbrArray = [];
//nbrArray = range(1,5);
console.log("Range = " + findRange(1,10));
console.log("Sum of range = " + sumRange(1,10));

function findRange(a, b) {
    let nbrs = [];
    for (let i = a; i <= b; i++) {
        nbrs.push(i);
    }
    return nbrs;
}

function sumRange(a, b) {
    sum = 0;
    for (let i = a; i <= b; i++) {
        sum = sum + i;
    }
    return sum;
}

// reverse an array
numArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numArray);
console.log(reverseArray(numArray));
console.log(reverseArrayInPlace(numArray));

function reverseArray(numArray) {

    let numArray2 = [];
    for (let i=numArray.length-1; i>=0; i--) {
        numArray2.push(numArray[i]);
    }
    return numArray2;
}

function reverseArrayInPlace(numArray) {
    // find midPoint of the array
    // since we are swapping 1st half of the array w/ the 2nd half
    let midPoint = Math.floor(numArray.length/2);
    for (let i=0; i < midPoint; i++) {
        let temp = numArray[i];
        numArray[i] = numArray[numArray.length-1 - i];
        numArray[numArray.length-1 - i] = temp; 
    }
    return numArray;
}

