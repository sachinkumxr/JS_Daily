//functions .......

// regular function

function a(){
    console.log("first");
    
}

//arrow function

const aa = (b)=> {
    
    console.log("second");
    
}

const c = function(){
    
    console.log("third");
    
}
a();
aa();
c();

function old(age){
    return age;
}
console.log(old(66));

function area(x,y){
    return x*y;
}
console.log(area(7,9));


const foo = function(){
    return function(){
        console.log("hello");
    }
}
foo()();//high order function


//callback function- function passed as an argument in another function

function processData(num, callback) {
    let result = num * 2;
    callback(result);
}

function displayResult(output) {
    console.log("Result is:", output);
}
processData(5, displayResult);
