const hamburger = document.querySelector(".header__menu")
const header = document.querySelector(".header")
const header1 = document.querySelector(".header__right")


hamburger.addEventListener("click",()=>{
    header.classList.toggle("active")
    header1.classList.toggle("active")
})