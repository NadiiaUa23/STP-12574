const reviewsMoreBtn = document.querySelector('[data-reviews-more]');
const reviewCards = document.querySelectorAll('[data-review-card]');

if (reviewsMoreBtn) {
  reviewsMoreBtn.addEventListener('click', () => {
    reviewCards.forEach(card => {
      card.dataset.visible = 'true';
    });

    reviewsMoreBtn.dataset.hidden = 'true';
  });
}
