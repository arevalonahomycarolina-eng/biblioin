const cards = document.querySelectorAll('.card');

function checkCards() {
 const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);

const carousel = document.querySelector('.video-carousel');
let index = 0;

setInterval(() => {
  index = (index + 1) % carousel.children.length;
  carousel.scrollTo({
    left: carousel.children[index].offsetLeft,
    behavior: 'smooth'
  });
}, 1000); // cambia cada 5 segundos

const menuBurguer = document.getElementById("menu-burguer");
const navMenu = document.querySelector("nav ul");

menuBurguer.addEventListener("click", () => {
  navMenu.classList.burguer("show");
});