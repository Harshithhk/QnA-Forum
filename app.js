var li1 =document.querySelector(".incativetab1");
var li2 =document.querySelector(".incativetab2");
var li3 =document.querySelector(".incativetab3");
var li4 =document.querySelector(".incativetab4");

li1.addEventListener("click",()=>{
    li1.classList.add("activetab");
    li2.classList.remove("activetab");
    li3.classList.remove("activetab");
})
li2.addEventListener("click",()=>{
    li1.classList.remove("activetab");
    li2.classList.add("activetab");
    li3.classList.remove("activetab");
})
li3.addEventListener("click",()=>{
    li1.classList.remove("activetab");
    li2.classList.remove("activetab");
    li3.classList.add("activetab");
})