const navbar = document.getElementsByTagName('header')[0];

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
