///nav mobile//
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEL.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
