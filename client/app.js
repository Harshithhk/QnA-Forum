var li1 =document.querySelector(".incativetab1");
var li2 =document.querySelector(".incativetab2");
var li3 =document.querySelector(".incativetab3");
var li4 =document.querySelector(".incativetab4");

var hideReply = document.querySelector(".hiddenreply");
var noOfReplies = document.querySelector(".no-of-replies");

var thumbsup = document.querySelector(".thumbsup");
var downarrow = document.querySelector(".downarrow");

thumbsup.addEventListener('click',(e)=>{
    console.log("Likes");
    console.log(e.target.id);
    
    
})

noOfReplies.addEventListener("click",()=>{
    console.log("REMOVE")
    hideReply.classList.toggle("hiddenreply")
    downarrow.classList.toggle("fa-chevron-up")
})


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