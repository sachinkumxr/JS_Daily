async function fetchData() {
    try{
        let  response = await fetch("https://fakestoreapi.com/products");
        console.log(response);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status : ${response.status}`);  
        }
        const data = await response.json();
        displayApi(data);

    }catch(error){
        
        console.log(error);
        document.getElementById("newdata").innerText = "error is fetching ."; 
    }
    
}
function  displayApi(users) {
    const ele = document.getElementById("newdata");
    ele.innerHTML = "";
    users.forEach(user => {
     const userContiner = document.createElement("div");
    userContiner.innerHTML = `<h2>${user.title}   <img src="${user.image}" alt="${user.title}"</h2>`;
    ele.appendChild(userContiner);
});
}
fetchData();