var menu = document.getElementById("menu")
var r=document.getElementsByClassName("r")
function toggle_menu()
{
if(menu.style.left!="85%")
{
menu.style.left="85%"
r[0].style.transform="translate(0px,13px) rotate(45deg)"

r[1].style.background="rgba(0,0,0,0)"
r[2].style.transform="translate(0px,-13px) rotate(-45deg)"
return
}
if(menu.style.left != "100%")
{
menu.style.left="100%"
r[0].style.transform="translate(0px,0px) rotate(0deg)"
r[1].style.background ="rgba(240, 248, 255)"
r[2].style.transform="translate(0px,0px) rotate(0deg)"
return
}
}