const navbar = document.getElementsByTagName('header')[0];
let sticky = navbar.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function () {
  stickyHeader();
};

const scrollPage = (e) => {
  console.log(e.target.dataset.position);
  document
    .getElementById(e.target.dataset.position)
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const navLinks = [...document.getElementsByClassName('nav-links')];

navLinks.forEach((link) => {
  link.addEventListener('click', scrollPage);
});
