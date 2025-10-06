const menuBurguer = document.getElementById("menu-burguer");
const navMenu = document.querySelector("nav ul");

menuBurguer.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});