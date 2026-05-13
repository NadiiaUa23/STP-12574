const reviewsMoreBtn = document.querySelector('[data-reviews-more]');
const hiddenReviews = document.querySelectorAll('[data-extra-review]');

if (reviewsMoreBtn && hiddenReviews.length > 0) {
  reviewsMoreBtn.addEventListener('click', () => {
    const nextHiddenReview = Array.from(hiddenReviews).find(review =>
      review.classList.contains('review-card--hidden')
    );

    if (!nextHiddenReview) {
      reviewsMoreBtn.style.display = 'none';
      return;
    }

    nextHiddenReview.classList.remove('review-card--hidden');
    nextHiddenReview.classList.add('review-card--visible');

    const stillHidden = Array.from(hiddenReviews).some(review =>
      review.classList.contains('review-card--hidden')
    );

    if (!stillHidden) {
      reviewsMoreBtn.style.display = 'none';
    }
  });
}
