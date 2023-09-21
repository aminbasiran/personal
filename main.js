const hamburger = document.querySelector(".header__menu")
const header = document.querySelector(".header")
const HR = document.querySelector(".header__right")


hamburger.addEventListener("click",()=>{
    header.style.height = "100px";
    header.style.width = "100%";
    HR.style.display = "flex";
})