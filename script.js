const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  const isOpen = nav.classList.toggle('open');
  overlay.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

navToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      toggleMenu();
    }
  });
});
