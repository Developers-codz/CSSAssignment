const listNode = document.querySelectorAll("li")
listNode.forEach(item1 =>{
    item1.addEventListener("click",()=>{
        listNode.forEach(item2 =>{
            item2.classList.remove("active");
        })
        item1.classList.add("active")
    })
})

//  Button toggles badge visibility

const hideBtn = document.querySelector(".hide-btn");
const badge = document.querySelector(".circle-for-hide-btn")


var flag = false;

hideBtn.addEventListener("click",()=>{
    flag=!flag;
    if(flag)
        {
            badge.style.display = "none" ;
        }
    else
     {
       
        badge.style.display="inline";  
     }  
})


// baseline snack bars

const snackBar = document.querySelector(".snack-bar")
const baselineSnackBar = document.querySelector(".baseline")
snackBar.addEventListener("click",()=>{
    baselineSnackBar.style.display = "block"
})
const cutButton = document.querySelector(".cut")
console.log(cutButton)
cutButton.addEventListener("click",()=>{
    baselineSnackBar.style.display = "none"
})