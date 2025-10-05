
const noticias = document.querySelectorAll('.actividades');

window.addEventListener('scroll', checkNoticias);
window.addEventListener('load', checkNoticias);

function checkNoticias() {
  const triggerBottom = window.innerHeight / 5 * 4;
  noticias.forEach(noticia => {
    const top = noticia.getBoundingClientRect().top;
    if(top < triggerBottom){
      noticia.style.opacity = '1';
      noticia.style.transform = 'translateY(0)';
    }
  });
}

const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    noticias.forEach(noticia => {
      if(category === 'all' || noticia.getAttribute('data-category') === category){
        noticia.style.display = 'block';
      } else {
        noticia.style.display = 'none';
      }
    });
  });
});
