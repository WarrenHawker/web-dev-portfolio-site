const navbar = <HTMLElement>document.querySelector('header');

const scrollPage = (e: Event) => {
  if (!e.target) {
    return;
  }
  const position = (e.target as HTMLButtonElement).dataset.position;

  if (position) {
    const targetEl = document.getElementById(position);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach((link) => {
  link.addEventListener('click', scrollPage);
});
