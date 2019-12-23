// let's create some stuffies
// create 3 sutffies, store in an arry,
// then print contents of array to console

let s1 = {
    id:1,
    type:"dinosaur",
    color:"purple",
    size: "XL",
    limbs: "4"
};
let s2 = {
    id:2,
    type:"seal",
    color:"blue",
    size: "LG",
    limbs: "2"
};
let s3 = {
    id:3,
    type:"monkey",
    color:"indigo",
    size: "MD",
    limbs: "4"
};

let stuffies = [s1, s2, s3];

for (let s of stuffies) {
    console.log("==========Stuffy stuff==========");
   // console.log(s);
   // console.log("Stuffy "+s.id+ ", type=" + s.type, ", color=" + s.color);
   // console.log(Object.keys(s));
    for (let k of Object.keys(s)) {
        console.log("Property "+ k + ", value: " +s[k]);
    }
}




