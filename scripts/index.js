const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
	console.log(checkbox.checked);
	if (checkbox.checked) {
		document.body.classList.add('theme-winter');
		document.body.classList.remove('theme-summer');
	} else if (!checkbox.checked) {
		document.body.classList.add('theme-summer');
		document.body.classList.remove('theme-winter');
	}
});
