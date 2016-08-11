var block1 = document.querySelector(".class1");
var popup1 = document.querySelector(".popup1");
var scroll = document.querySelector(".main-wrap");
var dark = document.querySelector(".dark")

var close = document.querySelector(".krestik");

block1.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.add("show");
  scroll.classList.add("scroll");
  dark.classList.add("overall");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.remove("show");
  scroll.classList.remove("scroll");
  dark.classList.remove("overall");
});


var block2 = document.querySelector(".class2");
var popup2 = document.querySelector(".popup2");
var close2 = document.querySelector(".krestik2");

block2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.add("show2");
  dark.classList.add("overall");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("show2");
  dark.classList.remove("overall");
});