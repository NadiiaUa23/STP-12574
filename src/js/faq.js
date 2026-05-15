const faqItems = document.querySelectorAll('[data-faq-item]');

faqItems.forEach(item => {
  const button = item.querySelector('[data-faq-question]');
  const icon = item.querySelector('[data-faq-icon]');

  button.addEventListener('click', () => {
    const isOpen = item.dataset.open === 'true';

    faqItems.forEach(currentItem => {
      currentItem.dataset.open = 'false';

      currentItem.querySelector('[data-faq-icon]').textContent = '+';
    });

    if (!isOpen) {
      item.dataset.open = 'true';
      icon.textContent = '−';
    }
  });
});
