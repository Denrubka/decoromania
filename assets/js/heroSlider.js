import { sliderButtonPrev, sliderButtonNext } from "./sliderButtons.js";

export const heroSlider = () => {
  $(document).ready(function(){
    $('.hero__slider').slick({
      appendArrows: $('.hero__slider-buttons'),
      infinite: true,
      fade: true,
      speed: 2000,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `${sliderButtonPrev}`,
      nextArrow: `${sliderButtonNext}`,
    });
  });
  
  $('.hero__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let currentSlideElem = slick.$slides[currentSlide];
    let nextSlideElem = slick.$slides[nextSlide];
  
    currentSlideElem.querySelector('.hero__slide-title').style.opacity = '0';
    nextSlideElem.querySelector('.hero__slide-title').style.opacity = '1';
  
    currentSlideElem.querySelector('.hero__slide-text').style.opacity = '0';
    nextSlideElem.querySelector('.hero__slide-text').style.opacity = '1';
  
    currentSlideElem.querySelector('.btn_main').style.opacity = '0';
    nextSlideElem.querySelector('.btn_main').style.opacity = '1';
  });
  
  $('.hero__slider').on('init', function(event, slick) {
    const currentSlide = slick.$slides[0];
    currentSlide.querySelector('.hero__slide-title').style.opacity = '1';
  
    currentSlide.querySelector('.hero__slide-text').style.opacity = '1';
  
    currentSlide.querySelector('.btn_main').style.opacity = '1';
  })
}