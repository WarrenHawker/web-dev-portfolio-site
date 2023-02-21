const overlay = document.getElementById('cv-overlay');
const showCVButton = document.getElementById('btn-show-cv');
const closeCVButton = document.getElementById('cv-close');
showCVButton.addEventListener('click', () => {
    overlay.classList.add('active');
});
closeCVButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});
