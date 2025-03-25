//index of
let str = "My name is Sachin......Sachin is my name";
let x = str.indexOf("Sachin",11);
let y =str.lastIndexOf("Sachin");
console.log(x);
console.log(y);

//concatenation

let s1 = "sachin";
let s2 = "kumar";
console.log(s1+s2);
console.log(s1.concat(s2));
//slice
console.log(str.slice(1,15));


//substring
console.log(str.substring(4,19));

//replace and replaceAll

console.log(str.replaceAll(" ", "_"));
 
//trim - removes space from starting and ending of string

console.log(str.trim());

//split - it takes seperator as argument- here it is space " "

str = str.split(" ")
console.log(str);


//length
console.log(s1.length);
