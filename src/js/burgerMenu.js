// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });
const openBtnEl = document.querySelector('[data-menu-open]');
const burgerMenuEl = document.querySelector('[data-visible]');
const menuLinks = document.querySelectorAll('.burger-menu__link');

const openMenu = () => {
  burgerMenuEl.dataset.visible = 'true';
  openBtnEl.setAttribute('aria-expanded', 'true');
  document.body.classList.add('body-no-scroll');
};

const closeMenu = () => {
  burgerMenuEl.dataset.visible = 'false';
  openBtnEl.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('body-no-scroll');
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
