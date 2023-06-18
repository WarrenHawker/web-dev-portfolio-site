const bgSummer = <HTMLElement>(
  document.getElementsByClassName('background-colors-summer')[0]
);
const bgWinter = <HTMLElement>(
  document.getElementsByClassName('background-colors-winter')[0]
);

function toggleTheme() {
  if (!themeToggle.checked) {
    document.body.classList.add('theme-winter');
    document.body.classList.remove('theme-summer');
    bgSummer.style.opacity = '0';
    bgWinter.style.opacity = '1';
  } else if (themeToggle.checked) {
    document.body.classList.add('theme-summer');
    document.body.classList.remove('theme-winter');
    bgSummer.style.opacity = '1';
    bgWinter.style.opacity = '0';
  }
}

function setBackgroundSize() {
  const mainElement = document.getElementsByTagName('main')[0];
  let pageHeight = mainElement.getBoundingClientRect();
  pageHeight = mainElement.getBoundingClientRect();
  bgSummer.style.height = `${pageHeight.height}px`;
  bgWinter.style.height = `${pageHeight.height}px`;
}

//toggle button to change theme colours
const themeToggle = <HTMLInputElement>document.getElementById('checkbox');
themeToggle.addEventListener('change', toggleTheme);

//set initial background height on page load
window.onload = () => {
  setBackgroundSize();
};

//change background height when window is resized
window.addEventListener('resize', setBackgroundSize);
