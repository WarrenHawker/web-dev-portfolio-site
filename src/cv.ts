import { setBackgroundSize } from './theme';

const overlay = <HTMLElement>document.getElementById('cv');
const showCVButton = <HTMLElement>document.getElementById('btn-show-cv');
const closeCVButton = <HTMLElement>document.getElementById('overlay-close');

showCVButton.addEventListener('click', () => {
  overlay.classList.add('open');
  overlay.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
  showCVButton.style.display = 'none';
  setBackgroundSize();
});

closeCVButton.addEventListener('click', () => {
  showCVButton.style.display = 'block';
  overlay.classList.remove('open');
  showCVButton.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
  setBackgroundSize();
});
