
let works=localStorage.getItem("todos");
var is_exit=true;
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
    todos.forEach((todo,index)=>{
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
//
// addInput.addEventListener("submit",evently=>{
//   console.log(addInput.textContent);
// })
let  addButton=document.querySelector("#add_button");
let addInput=document.querySelector("#add");
let searchButton=document.querySelector("#search_button");
let searchInput=document.querySelector("#search");
addButton.addEventListener('click',e=>{
    addInput.classList.toggle("show");
    searchInput.classList.remove("show");
    addInput.addEventListener('submit',event=>{
        event.preventDefault();
        if(addInput.add.value){
            works.forEach(e=>{
                if(e.content==addInput.add.value){
                is_exit=false;
                }
            })
            if (is_exit==true){
                works.push({content:addInput.add.value,status:true});
                localStorage.setItem("todos",JSON.stringify(works));
                todo_func(works);
                addInput.add.value="";
            }else {
                alert("this activity now is available");
                addInput.add.value="";
            }
        }
    })
})

    searchButton.addEventListener("click",e=>{
    searchInput.classList.toggle("show");
    addInput.classList.remove("show");
    searchInput.addEventListener("keyup",e=>{
        e.preventDefault();
        if (searchInput.search.value){
            let filtered=[];
            works.forEach(e=>{
                if(e.content.toLowerCase().includes(searchInput.search.value.toLowerCase())){
                filtered.push( {content:e.content, status: true})
                }
            })
            todo_func(filtered);
        }else {
            todo_func(works);
        }
    })
    })
