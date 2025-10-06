document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 0.6s';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`; 
    observer.observe(card);
  });

  const hero = document.querySelector('.hero-content');
  if(hero){
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(30px)';
    setTimeout(() => {
      hero.style.transition = 'all 1s';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.03)';
      card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });
  });
});

const carousel = document.querySelector('.video-carousel');
let index = 0;

setInterval(() => {
  index = (index + 1) % carousel.children.length;
  carousel.scrollTo({
    left: carousel.children[index].offsetLeft,
    behavior: 'smooth'
  });
}, 3000);

const menuBurguer = document.getElementById("menu-burguer");
const navMenu = document.querySelector("nav ul");

menuBurguer.addEventListener("click", () => {
  navMenu.classList.burguer("show");
});