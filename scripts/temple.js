const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `©${currentYear} 🎀 Kevin Ouma Ogutu 🎀 Kenya`;

const lastModifiedDate = document.lastModified;
document.getElementById('salutation').textContent = `Las Modified: ${lastModifiedDate}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Toggle between hamburger and 'X' symbol
    if (hamburger.textContent === '☰') {
        hamburger.textContent = 'X';
    } else {
        hamburger.textContent = '☰';
    }
});