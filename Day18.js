//call - arguments are passed individually

let obj = {
    firstname : "Sachin",
    lastname : "Kumar"
};
function greet(greeting,year){
    console.log(greeting + " " + this.firstname + " " + this.lastname  + " " + year);
}

greet.call(obj, "hello", 2023);


//apply - arguments are passed in an array

let obj1 = {
    firstname : "Sachin",
    lastname : "Kumar"
};
function greet(greeting,year){
    console.log(greeting + " " + this.firstname + " " + this.lastname  + " " + year);
}

greet.apply(obj1, ["hii", 2025]);



//bind - it returns a function with "this" permanently bound to provided object

let obj2 = {
    firstname : "Raman",
    lastname : "Singh"
};

function greet(greeting, year){
    console.log(greeting + " " + this.firstname + " " + this.lastname  + " " + year);
}

const user = greet.bind(obj2, "Hi there", 2020);

user();



// jQuery - JS Library
// Ajax - framework - Asynchronous javaScript and XML - it is used to update the contents without reloading the page


