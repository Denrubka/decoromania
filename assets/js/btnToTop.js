export default function btnToTop() {

  //Функция кнопки наверх
  const goTopBtn = document.querySelector('.btn-top');
  const backToTop = () => {
      if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 10);
      }

  }
  //Отслеживание координат
  const trackScroll = () => {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
          goTopBtn.classList.add('btn-top_show');
      }
      if (scrolled < coords) {
          goTopBtn.classList.remove('btn-top_show');
      }
  }

const path = document.querySelector('.btn-top__circle path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;
path.getBoundingClientRect();

window.addEventListener("scroll", function(e) {
  const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  const drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;

  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
});

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
}