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

let works=localStorage.getItem("todos");

try{
works=JSON.parse(works);
works=works.length?works:null;
}catch(e) {
works=null
}
if (!works) {
    works = [
        {content: "Shopping", status: true},
        {content: "Watch videos", status: true},
        {content: "Like videos", status: true},
    ]
    localStorage.setItem("todos", JSON.stringify(works))
}

//function for create and update todos

function todo_func(todos) {
    let groupItems=document.querySelector("#list-item-group");
    groupItems.innerHTML="";
    works.forEach((todo,index)=>{
        let li=document.createElement("li");
        li.classList.add("list-group-item");
        let span=document.createElement("span");
        span.classList.add("text-dark");
        span.textContent=todo.content;
        span.style.textDecoration = todo.status ? "initial" : 'line-through'
        let deleteBtn = document.createElement("img")
        deleteBtn.src = "media/delete.png"
        deleteBtn.classList.add("bi-trash");
        li.append(span);
        li.append(deleteBtn);

        groupItems.append(li)
//add delete btn
        deleteBtn.addEventListener("click",e=>{
            works.splice(index,1);
            localStorage.setItem("todos",JSON.stringify(works));
            todo_func(works);
        })
//add do works object
        span.addEventListener("click",e=>{
            works[index].status=!works[index].status;
            localStorage.setItem("todos",JSON.stringify(works));
            todo_func(works);
        })
    })
}
todo_func(works);