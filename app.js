const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const header = document.querySelector("header");

openMenu.addEventListener("click",function show(){
    header.style.height = "22rem";
    openMenu.style.display = "none";
    closeMenu.style.display = "inline-block";

});
closeMenu.addEventListener("click",function hide(){
    header.style.height = "5rem";
    openMenu.style.display = "inline-block";
    closeMenu.style.display = "none";

});


