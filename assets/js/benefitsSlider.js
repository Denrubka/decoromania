export const benefitsSlider = () => {
  $('.benefits__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
		