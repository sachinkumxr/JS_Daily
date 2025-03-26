let str = " hi cetpa";
str = str.slice(4, 9);
console.log(str);

//array

let arr = Array(1,4,5,5);
let ar = [3,6,1,4];
console.log(arr);
console.log(ar);
arr.push(66);//push method returns the new length of array and adds element at last

let count = ar.push(222);
console.log(arr);
console.log(ar);
console.log(count);
arr = arr.slice(2,5);//slice method
console.log(arr);

//tostring method - convert array to string

let a = ["i", "am","good", "coder"];
let res = a.toString();
console.log(res);

//shift - removes first element and returns it

let sf = a.shift();
console.log(sf); //will return forst element
console.log(a);


//map - executes an operation on all elements of array
console.log(ar.map((x => x*3)));

//pop - removes last element 

console.log(a.pop());
console.log(a);

//filter method- used to check a condition on all elements
let aa = ["i", "am","good", "coder"];
console.log(aa.filter(ele => ele.length>1));


//include

let ar1 = [3,6,1,4];
console.log(ar1.includes(5));//return boolean value

//find

console.log(ar1.find(x =>x==3));//return the element if present

//findIndex

console.log(ar1.findIndex(x => x==1));

//reverse()

console.log(ar1.reverse());

//splice()

let rr = ar1.splice(1,2,11);//removes elements ranging from index 1 to 2 including them and adds 11 to array

console.log(ar1);

//unshift - adds element at starting

let ee = ar1.unshift(55);
console.log(ar1);