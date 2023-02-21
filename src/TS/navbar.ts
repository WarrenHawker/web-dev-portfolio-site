const navbar = <HTMLElement>document.getElementsByTagName('header')[0];

const scrollPage = (e: Event) => {
  if (!e.target) {
    return;
  }
  document
    .getElementById((e.target as HTMLButtonElement).dataset.position)
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach((link) => {
  link.addEventListener('click', scrollPage);
});
