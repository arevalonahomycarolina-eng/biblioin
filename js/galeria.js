
const items = document.querySelectorAll('.gallery-item');

window.addEventListener('scroll', checkItems);
window.addEventListener('load', checkItems);

function checkItems() {
  const trigger = window.innerHeight / 5 * 4;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < trigger){
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}
