const checkbox = document.getElementById('checkbox');
const bgSummer = document.getElementsByClassName('background-colors-summer')[0];
const bgWinter = document.getElementsByClassName('background-colors-winter')[0];

checkbox.addEventListener('change', () => {
	console.log(checkbox.checked);
	if (checkbox.checked) {
		bgSummer.style.opacity = 0;
		bgWinter.style.opacity = 1;

		document.body.classList.add('theme-winter');
		document.body.classList.remove('theme-summer');
	} else if (!checkbox.checked) {
		bgSummer.style.opacity = 1;
		bgWinter.style.opacity = 0;

		document.body.classList.add('theme-summer');
		document.body.classList.remove('theme-winter');
	}
});
