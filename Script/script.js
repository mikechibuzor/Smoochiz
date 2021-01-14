console.log("connected");

// Select all elements with the hamburger class
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav");


hamburger.addEventListener("click", () => {
  navBar.classList.toggle("resp");
});
