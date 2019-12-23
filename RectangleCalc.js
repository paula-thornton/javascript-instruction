console.log("Welcome to the rectangle calculator");
console.log("");

for (let i=1; i<=5; i++) {
    let n1 = Math.floor((Math.random() * 10) + 1);
    let n2 = Math.floor((Math.random() * 10) + 1);
    let area = n1 * n2;
    let perimeter = n1*2 + n2*2;
    console.log("i = " + i);
    console.log("n1 = " + n1);
    console.log("n2 = " + n2);
    console.log("area = " + area);
    console.log("perimeter = " + perimeter);
    console.log("=====================");
}