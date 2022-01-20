const listNode = document.querySelectorAll("li")
listNode.forEach(item1 =>{
    item1.addEventListener("click",()=>{
        listNode.forEach(item2 =>{
            item2.classList.remove("active");
        })
        item1.classList.add("active")
    })
})