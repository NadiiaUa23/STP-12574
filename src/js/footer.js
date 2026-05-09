const yearEl = document.querySelector('.current-year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
