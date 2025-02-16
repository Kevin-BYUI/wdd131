const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const showList = document.querySelector('nav ul');
const contactForm = document.querySelector('form');
const modifiedDate = new Date(document.lastModified);
const contactYear = document.querySelector('.yearC');
contactYear.textContent = modifiedDate.getFullYear();
const contactModified = document.querySelector('.content-c');
contactModified.textContent = `Last Modified: ${modifiedDate.toLocaleString()}`;

const toggleMenu = () => {
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    showList.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

const contact = {
    name: "",
    email: "",
    message: "",
    displayConfirmation() {
        alert(`Thank you, ${this.name}! We have received your message.`);
    }
};

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contact.name = document.querySelector('#name').value;
    contact.email = document.querySelector('#email').value;
    contact.message = document.querySelector('#message').value;
    contact.displayConfirmation();
    contactForm.reset();
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const saveToLocalStorage = () => {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
    const savedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedData) {
        nameInput.value = savedData.name || '';
        emailInput.value = savedData.email || '';
        messageInput.value = savedData.message || '';
    }
};

[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', saveToLocalStorage);
});

contactForm.addEventListener('submit', () => {
    localStorage.removeItem('contactFormData');
});

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);