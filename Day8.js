//count a character in a string

const count_characters = () => {
    let str = "etdnfergdgdwwrtdninvdnd";
    let count_n = 0;
    let count_d = 0;


    for(let i=0;i<str.length;i++)
    {
        if(str[i] === "n")
            count_n++;
        if(str[i] === "d")
            count_d++;
    }
    return {count_n,count_d};
};
console.log(count_characters());


// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=1;i<=10;i++)
{
    let pattern = "";
    for(let j=1;j<=i;j++){
        pattern += j + " ";
    }
    console.log(pattern);        
}


//2-D Array

let arr = [
    [1,2],
    [3,4],
    [5,6]
];

for(let i = 0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
        console.log(arr[i][j]);
}

//concatenating string

let str = "sachin ";
let strr = "kumxr";

console.log(str.concat(strr));


//largest element in array

let ar = [4,7,211,8,69];
let max =ar[0];
for(let i =1;i<ar.length;i++)
{
    if(ar[i]>max)
        max=ar[i];
}
console.log(max);


//return duplicates in an array

let arrr = [2,6,9,8,2,7,8,3,6,9,5,3,8];
let a = [];

for(let i=0;i<arrr.length;i++)
{
     for(let j=i+1;j<arrr.length;j++)
     {
        if(arrr[i]==arrr[j] && !a.includes(arrr[i]))
            a.push(arrr[i]);
     }
    
}
console.log(a);


//print letter with frequency more than one


let s = "gjdinimfng";
const count = {};
for(let char of s)
{
    count[char] = (count[char] || 0) + 1;
}
let res = "";
const keyss = Object.keys(count).sort();
for(let char of keyss){
    if(count[char]>1){
        res += char + count[char];
    }
}

console.log(res);



