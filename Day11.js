var user = {
    name: "Sachin",
    work: "nothing",
    hobbies: ["coding", "playing"],
    bio: function(){
        console.log(`Hi! i am ${this.name}, my profession is ${this.work}`) //backtick 
    }
}

console.log(user.name);
console.log(user.hobbies);
user.bio();

//function constructor

function car(name, model, year){
    this.name = name;
    this.model = model;
    this.year = year;
}
const car1 = new car('audi', 'R8', 1300);
console.log(car1);



//class constructor

class Rectangle{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(10,10);
console.log(`height: ${square.height}, widht: ${square.width}`);
