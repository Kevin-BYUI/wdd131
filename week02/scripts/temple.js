const menuButton = document.querySelector('div');
const menu = document.querySelector('nav ul');
const title = document.querySelector('h1');
const lastModified = new Date(document.lastModified);
const copyrightYear = document.querySelector('.year');
copyrightYear.textContent = lastModified.getFullYear();
const modified = document.querySelector('.modified');
const iso = document.querySelector('.iso');
iso.textContent = `All rights Reserved.`
modified.textContent = `Last modified: ${lastModified.toString()}`;
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
    menu.classList.toggle('open');
    title.classList.toggle('hidden');
})
