const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const showList = document.querySelector('nav ul');
const footerP = document.querySelector('.copyrightYear');
const modYear = new Date(document.lastModified);
const lastModify = document.querySelector('.contents');

footerP.textContent = modYear.getFullYear();
lastModify.textContent = `Last modified: ${modYear.toLocaleString()}`;

const toggleMenu = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    showList.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

// Smooth scroll for Event Section links
document.querySelectorAll('nav a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});