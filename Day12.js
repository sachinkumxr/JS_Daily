// DOM
// document.getElementById(id)
// document.getElementsByTagName(name)
// document.getElementsByClassName(name)


function change(){
    let ele = document.getElementsByTagName("h1");
    ele[0].innerText = "Hello world";
    ele[1].style.backgroundColor = "aqua";
    let par = document.getElementById("fff");
    par.innerHTML = "<h1>paragraph</h1>"
    par.style.fontSize = "20px";
}
function move(){
    let ver = document.getElementsByClassName("main");
    ver[0].style.flexDirection = "column";
    ver[0].style.rowGap = "10px";
    let box = document.getElementsByClassName("card");
    for(let i=0;i<box.length;i++)
        box[i].style.backgroundColor = "brown";
}