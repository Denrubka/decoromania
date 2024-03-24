var header = document.getElementById("header-sticky");

var sticky = header.offsetTop + 100;

window.onscroll = function() {headerSticky()};

export default function headerSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header__sticky_show");
  } else {
    header.classList.remove("header__sticky_show");
  }
}