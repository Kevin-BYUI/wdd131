const modyDate = new Date(document.lastModified);
const paragraph = document.querySelector('.lastModified');
const currentYear = document.querySelector('#currentyear');
currentYear.textContent = modyDate.getFullYear();
paragraph.textContent = `Last modified: ${modyDate.toDateString()}`;

