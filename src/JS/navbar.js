const navbar = document.getElementsByTagName('header')[0];
const scrollPage = (e) => {
    if (!e.target) {
        return;
    }
    console.log(e.target.dataset.position);
    document
        .getElementById(e.target.dataset.position)
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
};
const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach((link) => {
    link.addEventListener('click', scrollPage);
});
