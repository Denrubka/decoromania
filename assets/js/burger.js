export default function burger() {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerButton = document.querySelectorAll('.burger__btn');

  burgerButton.forEach(btn => {
    btn.addEventListener('click', e => {
      if(!btn.classList.contains('burger__btn_active')) {
        btn.classList.add('burger__btn_active');
        burgerMenu.classList.add('burger-menu_show');
        document.body.style.overflowY = 'hidden';
      } else {
        btn.classList.remove('burger__btn_active');
        burgerMenu.classList.remove('burger-menu_show');
        document.body.style.overflowY = 'visible';
      }
    })
  })
}