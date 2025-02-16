const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const showList = document.querySelector('nav ul');
const lastModified = new Date(document.lastModified);
document.querySelector('.year').textContent = lastModified.getFullYear();
document.querySelector('.content').textContent = `Last Modified: ${lastModified.toLocaleString()}`;

const toggleMenu = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    showList.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

const imageURL = [
    'images/family1.jpg',
    'images/kevin.jpg',
    'images/family3.jpg',
    'images/family4.jpg'
];
const photoContainer = document.querySelector('.family-photo');

if (photoContainer) {
    imageURL.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Uploaded Photo';
        img.loading = 'lazy';
        img.style.maxWidth = '100%';
        img.style.marginRight = '10px';
        photoContainer.appendChild(img);
    });
} else {
    console.error('Photo container not found');
}
