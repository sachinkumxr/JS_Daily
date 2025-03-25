let num=77;
console.log(num);
let a = 80;
let b = 43;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
console.log(a==b); // value should be same...datatype doesn't matter
console.log(a!=b);
console.log(a===b);//first checks value, then checks datatype
console.log(a!==b); //value and datatype...one or both must be different to get true
console.log(a>b);
console.log(a<b);
console.log(a++,++a,a,a,a,a++,a++,a++,a,++a,++a,++a,a++,a++);
//80 82 82 82 82 82 83 84 85 86 87 88 88 89
console.log(b,b++,--b,b--,b++,b,b++,++b,--b,--b,b++);
//43 43 43 43 42 43 43 45 44 43 43
let c = 77;
console.log(c,c++,c--,c++,--c,--c,--c,++c,++c,c++,c,c,c++,c--);
// 77 77 78 77 77 76 75 76 77 77 78 78 78 79