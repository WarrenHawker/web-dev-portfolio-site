const themeToggle = document.getElementById('checkbox');
const bgSummer = document.getElementsByClassName('background-colors-summer')[0];
const bgWinter = document.getElementsByClassName('background-colors-winter')[0];
const mainElement = document.getElementsByTagName('main')[0];
let pageHeight = mainElement.getBoundingClientRect();

themeToggle.addEventListener('change', () => {
	if (checkbox.checked) {
		document.body.classList.add('theme-winter');
		document.body.classList.remove('theme-summer');
		bgSummer.style.opacity = 0;
		bgWinter.style.opacity = 1;
	} else if (!checkbox.checked) {
		document.body.classList.add('theme-summer');
		document.body.classList.remove('theme-winter');
		bgSummer.style.opacity = 1;
		bgWinter.style.opacity = 0;
	}
});

//set initial background height on page load
bgSummer.style.height = `${pageHeight.height}px`;
bgWinter.style.height = `${pageHeight.height}px`;

window.addEventListener('resize', () => {
	//change background height when window is resized
	pageHeight = mainElement.getBoundingClientRect();
	bgSummer.style.height = `${pageHeight.height}px`;
	bgWinter.style.height = `${pageHeight.height}px`;
});
