import { sliderButtonNext } from "./sliderButtons.js";
import { sliderButtonPrev } from "./sliderButtons.js";

export const worksSlider = () => {

  $(document).ready(function(){

    $('.works__slider').on('init', function(event, slick) {
      const slidesCount = slick.$slides.length;
      const dotsButtons = Array.from(slick.$dots[0].querySelectorAll('li'));
      const dotsWidth = slick.$dots[0].offsetWidth

      dotsButtons.forEach(btn => {
        btn.style.width = (dotsWidth / slidesCount) + 'px';
      })
    });

    $('.works__slider').slick({
      appendArrows: $('.works__slider-buttons'),
      dots: true,
      centerPadding: '0px',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: `${sliderButtonPrev}`,
      nextArrow: `${sliderButtonNext}`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        }, 
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }, 
      ]
    });
  });
}