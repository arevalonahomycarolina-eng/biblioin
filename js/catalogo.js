
const items = document.querySelectorAll('.gallery');

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

function filtrar(categoria) {
  const imagenes = document.querySelectorAll('.imagen');
  imagenes.forEach(img => {
    if (categoria === 'todos' || img.classList.contains(categoria)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

const menuBurguer = document.getElementById("menu-burguer");
const navMenu = document.querySelector("nav ul");

menuBurguer.addEventListener("click", () => {
  navMenu.classList.burguer("show");
});