import { sliderButtonNext } from "./sliderButtons.js";
import { sliderButtonPrev } from "./sliderButtons.js";

export const reviewsSlider = () => {
  $(document).ready(function(){
    const reviewsBlock = document.querySelector('.reviews');
    const reviewsSlides = reviewsBlock.querySelectorAll('.reviews__slide');
    const reviewsSlidesCount = reviewsSlides.length;

    reviewsSlides.forEach(slide => {
      const reviewsFeedbackText = slide.querySelector('.reviews__feedback-text');
      const reviewsFeedbackButton = slide.querySelector('.reviews__btn');

      reviewsFeedbackButton.addEventListener('click' , e => {
        reviewsFeedbackText.classList.remove('reviews__feedback-text_half_text');
        reviewsFeedbackButton.classList.add('reviews__btn_hide')
      })
    })

    $('.reviews__slider').on('init', function(event, slick, direction){
      const dotsButtons = Array.from(slick.$dots[0].querySelectorAll('li button'));

      dotsButtons.forEach(item => {
        item.setAttribute('data-slide-count', reviewsSlidesCount)
      })
    });

    $('.reviews__slider').slick({
      appendArrows: $('.reviews__dots'),
      appendDots: $('.reviews__dots'),
      // fade: true,
      // speed: 2000,
      draggable: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `${sliderButtonPrev}`,
      nextArrow: `${sliderButtonNext}`,
    });
  });
}