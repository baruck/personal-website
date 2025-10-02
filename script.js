const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const toggle = () => {
    if (window.scrollY > 400) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggle);
  toggle();
}
