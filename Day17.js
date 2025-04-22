//function types 

// regular functions
// arrow functions
// function expressions


// function constructor

function Student1(name, age)
{
    this.name = name;
    this.age = age;
}

const boy = new Student1("Sachin", 23);


// class constructor
class Student2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const girl = new Student2("Riya", 21);
console.log(boy.name,girl.name);

//both class and function constructor returns an empty object.



//spread operator

//in strings - to convert to array

const str = "sachin";
console.log(...str);


//in array - to copy or combine

let arr = [5,8,2,6];
let arr1 = [...arr];//to copy
console.log(arr1);

console.log(...arr,...arr1);//to merge

//in objects - to copy or merge

let obj1 =  {
    name : "rohan",
    age : 66
};
let obj2 = {
    address : "dehradun",
    id : 4673
};
let obj3 = {...obj1};
console.log(obj3);

const merged = {...obj1,...obj2};
console.log(merged);


const body = {
    height : 184,
    weight : 65
};
const brain = {
    iq : 100
};
const person = {
    name :"Sachin",
    ...body,
    ...brain
};
console.log(person);


//first class functions - functions are treated just like another variable

const foo = function(){
    console.log('hello');
}
foo();


//higher order functions - a function which takes another function as argument
//it returns another function as a result

const highh = function(){
    return function(){
        console.log('higher order function');   
    }
}
highh()();



//closures in JS


// it is a function inside another function

// The inner function can access the variables from its outer function, even after the outer 
// function has finished executing.

//The inner function "closes over" the variables of the outer function, creating a closure.

function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();
counter();
counter();


//another example of closure


function test(){
    var name = "fgbggsrg";

    function show(){ // it has access to name which is defined outside its scope
        console.log(name); 
    }
    show();
}
test();