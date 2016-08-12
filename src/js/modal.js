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


var block3 = document.querySelector(".class3");
var popup3 = document.querySelector(".popup3");
var close3 = document.querySelector(".krestik3");

block3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.add("show3");
  dark.classList.add("overall");
});

close3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.remove("show3");
  dark.classList.remove("overall");
});

var block4 = document.querySelector(".class4");
var popup4 = document.querySelector(".popup4");
var close4 = document.querySelector(".krestik4");

block4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.add("show4");
  dark.classList.add("overall");
});

close4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.remove("show4");
  dark.classList.remove("overall");
});

var block5 = document.querySelector(".class5");
var popup5 = document.querySelector(".popup5");
var close5 = document.querySelector(".krestik5");

block5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.add("show5");
  dark.classList.add("overall");
});

close5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.remove("show5");
  dark.classList.remove("overall");
});

var block6 = document.querySelector(".class6");
var popup6 = document.querySelector(".popup6");
var close6 = document.querySelector(".krestik6");

block6.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.add("show6");
  dark.classList.add("overall");
});

close6.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.remove("show6");
  dark.classList.remove("overall");
});