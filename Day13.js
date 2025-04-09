function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    let time = h + ":" + m + ":" + s;
    setTimeout(()=>{
        clock();
    },1000);
    document.getElementById("cc").innerText = time;
}
// setInterval(clock,1000);
clock();


//print 1 to 10 after respective intervals

let num=1;
// let i=0;
// function table(){
    
//     setTimeout(()=>{
//         table();
//     },num*1000);
//     let counting = document.getElementsByClassName("table");
//     counting[i].innerText = num + "  ";
//     i++;
//     num++;
// }
// table();
function table(){
    if(num>10)
        return;
    setTimeout(()=>{
        table();
    },num*1000);
    console.log(num);
    num++;
}
table();



//printing values from drop-down menu

function show(){
    let sub = document.getElementById("menu");
    let get = sub.value;
    document.getElementById("ss").innerText = get + "  ";
}

