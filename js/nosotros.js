
const cards = document.querySelectorAll('.card');

function checkCards() {
  const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);
