var pop=document.querySelector(".popup-box")
var overlay=document.querySelector(".popup-overlay")
var popbtn=document.getElementById("add-popup-btn")
var cancel = document.getElementById("cancel-book")
var add = document.getElementById("add-book")
var bt = document.getElementById("book-title")
var ba = document.getElementById("book-author")
var sd = document.getElementById("book-description")
var con = document.querySelector(".container")

popbtn.addEventListener("click",function()
{
    pop.style.display="block"
    overlay.style.display="block"
})
cancel.addEventListener("click",function(event)
{
    event.preventDefault()
    pop.style.display="none"
    overlay.style.display="none"
})
add.addEventListener("click",function()
{
    var d = document.createElement("div")
    
})
