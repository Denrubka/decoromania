export default function reviewsVideo() {
  const reviewsSlider = document.querySelector('.reviews__slider');

  if(reviewsSlider) {
    reviewsSlider.addEventListener('click', e => {
      const target = e.target;

      if(target.closest('.reviews__video-preview__img')) {
        const frame = target.nextElementSibling;
        const frameSrc = frame.getAttribute('data-src');

        frame.setAttribute('src', frameSrc);
        frame.removeAttribute('data-src');
        target.classList.add('reviews__video-preview__img_hide');

        console.log(frameSrc);
      }
    })
  }

}