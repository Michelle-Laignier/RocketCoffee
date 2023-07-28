const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const menu = document.querySelector(".menu")
const main = document.querySelector("main")

menuOpen.addEventListener("click", toggleMenu)
menuClose.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuOpen.classList.toggle("hide")
    menuClose.classList.toggle("hide")
    menu.classList.toggle("hide")
    main.classList.toggle("hide")
}