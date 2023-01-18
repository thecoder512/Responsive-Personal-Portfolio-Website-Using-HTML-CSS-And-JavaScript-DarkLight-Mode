// // logo anmation
// const logo = document.querySelector(".header-logo");

// window.addEventListener("load", () => {
//   logo.classList.add("logo-animation");
// });

// // menu active btn
// const navLinks = document.querySelectorAll(".list-link");

// function activeLink() {
//   navLinks.forEach((e) => {
//     e.classList.remove("focused-nav-link");
//     this.classList.add("focused-nav-link");
//   });
// }

// navLinks.forEach((i) => {
//   i.addEventListener("click", activeLink);
// });

// // theme anmation
const themeIcon = document.querySelector("#theme-icon");
const body = document.querySelector("body");

themeIcon.addEventListener("click", () => {
  body.classList.toggle("theme-light");
  if (body.classList.contains("theme-light")) {
    themeIcon.classList = `uil uil-sun`;
  } else {
    themeIcon.classList = `uil uil-moon`;
  }
});

// toggle anmation for menu
const toggleIcon = document.querySelector("#toggel-icon"),
  navMenu = document.querySelector("#nav-menu");

toggleIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-active");
});

//menu remove when link clicked
const aehmd = document.querySelectorAll(".list-link");
aehmd.forEach((element) => {
  element.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
  });
});
