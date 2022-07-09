const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
	if (document.body.classList == 'theme-summer') {
		document.body.classList.add('theme-winter');
		document.body.classList.remove('theme-summer');
	} else {
		document.body.classList.add('theme-summer');
		document.body.classList.remove('theme-winter');
	}
});
