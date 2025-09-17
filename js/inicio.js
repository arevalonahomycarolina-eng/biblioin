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

  let indice = 0;
  const slides = document.querySelectorAll('.image-slide');

  function mostrarSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    indice = (n + slides.length) % slides.length;
    slides[indice].classList.add('active');
  }

  function mover(dir) {
    mostrarSlide(indice + dir);
  }

  setInterval(() => {
    mover(1);
  }, 5000);