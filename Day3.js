//Operators

let a = 3;
let b = 5;

console.log(a<b && b>a);  //true
console.log(a>b || b>a);  //true
console.log(a!=b);  //true

console.log(a<b ? "yes" : "no");//yes


//Question 1

let c = 25;
let d = 7;

console.log(c+d);

//Question 2

let e = 4528;
e /= 1000;
console.log(Math.floor(e));


let x = 55;
if(x>10){
    console.log("x is greater than 10");
}
else{
    console.log("x is smaller than 10");
}