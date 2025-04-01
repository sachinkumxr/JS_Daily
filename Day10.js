//count vowels in a string
let str = "Indian";
let res = "";
for(let i of str)
{
    if((i==='a' || i=="e" || i=="i" || i=='o' || i=="u" || i==="A" || i=="E" || i=="I" || i=='O' || i=="U"))
    {
        res += i + " ";  
    }
}
console.log(res);


//even and odd in array

let arr = [3,5,72,6,6,8,24,99,212,32,1,53];
let count_even=0;
let count_odd = 0;
for(let i of arr)
{
    if(i%2==0)
        count_even++;
    else
        count_odd++;
}
console.log(count_even);
console.log(count_odd);


//counting 0s and 1s
let ar = [0,1,1,1,0,1,1,0,1,0,1,1,0];
let one = 0;
let zero = 0;

for(let i of ar)
{
    if(i==0)
        zero++;
    else
        one++;

}
console.log(zero + " " + one);
