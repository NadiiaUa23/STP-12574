const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  const icon = item.querySelector('.faq-icon');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    faqItems.forEach(currentItem => {
      currentItem.classList.remove('is-open');
      currentItem.querySelector('.faq-icon').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('is-open');
      icon.textContent = '−';
    }
  });
});
