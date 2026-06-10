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
    bt.value=""
    ba.value=""
    sd.value=""
})
add.addEventListener("click",function()
{
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML="<h2>"+bt.value+"</h2>"+"<h5>"+ba.value+"</h5>"+"<p>"+sd.value+"</p>"+"<button onclick=deletei(event)>Delete</button>"
    con.append(div)
    pop.style.display="none"
    overlay.style.display="none"
    bt.value=""
    ba.value=""
    sd.value=""
})
function deletei(event)
{
    event.target.parentElement.remove()
}
function editi(event)
{
    pop.style.display="block"
    overlay.style.display="block"
    var val = event.target.parentElement
    bt.value = val.children[0].textContent
    ba.value = val.children[1].textContent
    sd.value = val.children[2].textContent
    val.remove()
}
