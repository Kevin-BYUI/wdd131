const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const showList = document.querySelector('nav ul');
const yearMade = document.querySelector('.year');
const modification = new Date(document.lastModified);

yearMade.textContent = modification.getFullYear();
document.querySelector('.mod-content').textContent = `Last Modified: ${modification.toLocaleString()}`;

const toggleMenu = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    showList.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.3 });

animatedElements.forEach(el => observer.observe(el));

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentSlide * 100}%)`;
}

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const fadeInElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeInElements.forEach(el => fadeObserver.observe(el));