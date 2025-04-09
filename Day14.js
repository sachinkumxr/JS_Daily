//query selector

let dropdown = document.querySelector("#menu");
let btn = document.querySelector("#click");
let output = document.querySelector("#output");

btn.addEventListener("click", ()=>{// click, mouseover, change
    const selectedval = dropdown.value;
    output.textContent = `${selectedval}`;
});