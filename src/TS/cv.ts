const overlay = <HTMLElement>document.getElementById('cv-overlay');
const showCVButton = <HTMLElement>document.getElementById('btn-show-cv');
const closeCVButton = <HTMLElement>document.getElementById('cv-close');

showCVButton.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeCVButton.addEventListener('click', () => {
  overlay.classList.remove('active');
});
