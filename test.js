var block1 = document.querySelector(".class1");
var popup1 = document.querySelector(".popup1");
var scroll = document.querySelector(".main-wrap");
var dark = document.querySelector(".dark")

// var close = document.querySelector(".krestik");

block1.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.add("show");
  scroll.classList.add("scroll");
  dark.classList.add("overall");
});

// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup1.classList.remove("show");
// });
