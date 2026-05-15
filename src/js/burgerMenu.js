const openBtnEl = document.querySelector('[data-menu-open]');
const burgerMenuEl = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');

const openMenu = () => {
  burgerMenuEl.dataset.visible = 'true';
  openBtnEl.setAttribute('aria-expanded', 'true');
  document.body.dataset.scrollLock = 'true';
};

const closeMenu = () => {
  burgerMenuEl.dataset.visible = 'false';
  openBtnEl.setAttribute('aria-expanded', 'false');
  document.body.dataset.scrollLock = 'false';
};

const toggleMenu = () => {
  const isOpen = burgerMenuEl.dataset.visible === 'true';

  if (isOpen) {
    closeMenu();
    return;
  }

  openMenu();
};

openBtnEl.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

document.addEventListener('click', event => {
  const isClickInsideMenu = burgerMenuEl.contains(event.target);
  const isClickOnButton = openBtnEl.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    closeMenu();
  }
});
