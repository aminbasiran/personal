const hamburger = document.querySelector(".header__menu")
const header = document.querySelector(".header")
const header1 = document.querySelector(".header__right")




// function checkScreenWidth() {
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
//     if (screenWidth <= 769) {
//         const divToRemove = document.querySelector('.main__right');
//         if (divToRemove) {
//             divToRemove.remove(); // Remove the div if it exists
//         }
//     }
// }

// // Check the screen width when the page loads and when it's resized
// window.addEventListener('load', checkScreenWidth);
// window.addEventListener('resize', checkScreenWidth);


hamburger.addEventListener("click",()=>{
    header.classList.toggle("active")
    header1.classList.toggle("active")
})