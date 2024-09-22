// Get the current year dynamically and update the copyright text
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `©${currentYear} 🎀 Kevin Ouma Ogutu 🎀 Kenya`;

// Get the last modified date of the document and display it in the footer
const lastModifiedDate = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modified: ${lastModifiedDate}`;