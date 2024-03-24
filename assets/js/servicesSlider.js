import { sliderButtonPrev, sliderButtonNext } from "./sliderButtons.js";

export const servicesSlider = () => {
  $(document).ready(function(){
    $('.services__slider').slick({
      appendArrows: $('.services__slider-buttons'),
      infinite: true,
      fade: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `${sliderButtonPrev}`,
      nextArrow: `${sliderButtonNext}`,
    });
  });

  $('.services__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let prevSlideElem = slick.$slides[currentSlide];
    let nextSlideElem = slick.$slides[nextSlide];

    const prevSlideCards = Array.from(prevSlideElem.querySelectorAll('.services__card'));
    const nextSlideCards = Array.from(nextSlideElem.querySelectorAll('.services__card'));

    prevSlideCards[0].style.transform = 'translateX(-150%)';
    prevSlideCards[1].style.transform = 'translateY(-150%)';
    setTimeout(() => {
      prevSlideCards[2].style.transform = 'translateY(-150%)';
    }, 70)
    prevSlideCards[3].style.transform = 'translateY(150%)';
    setTimeout(() => {
      prevSlideCards[4].style.transform = 'translateY(150%)';
    }, 70)
    prevSlideCards[5].style.transform = 'translateX(150%)';

    setTimeout(() => {
      nextSlideCards[0].style.transform = 'translateX(0)';
      nextSlideCards[1].style.transform = 'translateY(0)';
      setTimeout(() => {
        nextSlideCards[2].style.transform = 'translateY(0)';
      }, 70)
      nextSlideCards[3].style.transform = 'translateY(0)';
      setTimeout(() => {
        nextSlideCards[4].style.transform = 'translateY(0)';
      }, 70)
      nextSlideCards[5].style.transform = 'translateX(0)';
    }, 800)
  });

  $('.services__slider').on('init', function(event, slick) {
    const currentSlide = slick.$slides[0];
    const currentSlideCards = Array.from(currentSlide.querySelectorAll('.services__card'));
    
    currentSlideCards[0].style.transform = 'translateX(0)';
    currentSlideCards[1].style.transform = 'translateY(0)';
    setTimeout(() => {
      currentSlideCards[2].style.transform = 'translateY(0)';
    }, 70)
    currentSlideCards[3].style.transform = 'translateY(0)';
    setTimeout(() => {
      currentSlideCards[4].style.transform = 'translateY(0)';
    }, 70)
    currentSlideCards[5].style.transform = 'translateX(0)';
  })
}