const reviewsMoreBtn = document.querySelector('[data-reviews-more]');
const reviewCards = document.querySelectorAll('.review-card');

if (reviewsMoreBtn) {
  reviewsMoreBtn.addEventListener('click', () => {
    reviewCards.forEach(card => {
      card.classList.add('review-card--visible');
    });

    reviewsMoreBtn.classList.add('is-hidden');
  });
}
