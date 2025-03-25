//for loop

let a = 7;
for(let i=0;i<a;i++)
{
    console.log("program");
}


let obj = {
    name:"Sachin",
    age : 44
};
console.log(obj);
console.log(obj.age);

//for in loop

for(let key in obj){
    console.log(`${key} = ${obj[key]}`)
}

//table
let num = prompt("Enter a number: ")
for(let j =1;j<=10;j++)
{
    console.log(num + " * " +  j + " = " + num*j);
}

//while loop
let q = 1;

while(q<10)
{
    console.log("While loop");
    q++;
}
//do while loop

do{
    console.log("do while");
    q++;

}while(q<15);