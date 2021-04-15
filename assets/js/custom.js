let openMenuIcon = document.querySelector(".openMenubtn");
let nav__wrapper = document.querySelector(".navWrapper");
let closeMenuBtn = document.querySelector(".closeBtn");


openMenuIcon.addEventListener("click", function () {
    nav__wrapper.classList.add("slidein")
    document.body.classList.add("lock-scroll")

});
closeMenuBtn.addEventListener("click", function () {
    nav__wrapper.classList.remove("slidein")
    document.body.classList.remove("lock-scroll")
});
console.log("working");