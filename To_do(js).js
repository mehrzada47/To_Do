let  addButton=document.querySelector("#add_button");
let addInput=document.querySelector("#add");
let searchButton=document.querySelector("#search_button");
let searchInput=document.querySelector("#search");
addButton.addEventListener('click',e=>{
    addInput.classList.toggle("show");
    searchInput.classList.remove("show");
})

searchButton.addEventListener("click",e=>{
    searchInput.classList.toggle("show");
    addInput.classList.remove("show");
})