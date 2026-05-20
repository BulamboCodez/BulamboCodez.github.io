const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const navLinks = nav ? nav.querySelectorAll('a') : [];
const yearElement = document.getElementById('current-year');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
