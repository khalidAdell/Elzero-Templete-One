"use strict";
let navMenu = document.querySelector(".head-menu");
let navBar = document.querySelector(".nav ul");

function removeNavBar(event) {
  if (navBar.getAttribute("class") && event.target.closest(".head-menu")) {
    navBar.classList.remove("hidden");
  } else {
    if (event.target.closest(".nav ul")) return;
    navBar.classList.add("hidden");
  }
}
document.addEventListener("click", removeNavBar);
