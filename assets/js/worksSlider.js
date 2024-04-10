import { sliderButtonNext } from "./sliderButtons.js";
import { sliderButtonPrev } from "./sliderButtons.js";

export const worksSlider = () => {
  $(document).ready(function(){
    $('.works__slider').slick({
      appendArrows: $('.works__slider-buttons'),
      // fade: true,
      // speed: 2000,
      dots: true,
      centerPadding: '0px',
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: `${sliderButtonPrev}`,
      nextArrow: `${sliderButtonNext}`,
    });
  });
}