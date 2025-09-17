
const blogCards = document.querySelectorAll('.blog-card');
const filterBtns = document.querySelectorAll('.filter-btn');

function checkBlog() {
  const trigger = window.innerHeight * 0.8;
  blogCards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkBlog);
window.addEventListener('load', checkBlog);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    blogCards.forEach(card => {
      card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? 'block' : 'none';
    });
  });
});
