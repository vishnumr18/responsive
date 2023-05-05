let navToggle = document.querySelector(".nav-toggle");
let nav = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("nav-visible");
});
