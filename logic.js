const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
const navLinks = nav ? nav.querySelectorAll('a') : [];
const yearElement = document.getElementById('current-year');

if (menuToggle && nav) {
  const menuLabel = menuToggle.querySelector('.menu-label');

  const setMenuOpen = open => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    nav.classList.toggle('open', open);
    if (menuLabel) {
      menuLabel.textContent = open ? 'Close' : 'Menu';
    }
  };

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!expanded);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.matchMedia('(min-width: 641px)').addEventListener('change', event => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
