const menuButton = document.querySelector('.span');
document.cookie = "userSession=abc123; SameSite=Lax; Secure";
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
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17160,
    imageUrl:
    "https://assets.ldscdn.org/6e/59/6e59c0792ef68e7d587dfd19a7e087b7c42d11f0/accra_ghana_temple_lds.jpeg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
   "https://assets.ldscdn.org/af/59/af595740b58ceeb497a7394d00f12467f8429103/salt_lake_temple_lds.jpeg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59111,
    imageUrl:
    "https://media.ldscdn.org/images/media-library/temples/sao-paulo-brazil/sao-paulo-brazil-temple-lds-243974-print.jpg?download=true"
  },
];
const button1 = document.querySelector('.btn1');
const container = document.querySelector('.container');
button1.addEventListener('click', function(){
  container.innerHTML = "";
  templeOld.innerHTML = "";
  div3.innerHTML = "";
  templeLarge.innerHTML = "";
  templeSmall.innerHTML = "";
  const templeCards = temples.map(temple => {
    const innerContainer = document.createElement('figure');
    const templeName = document.createElement('h3');
    templeName.innerHTML = `<strong>${temple.templeName}</strong>`
    innerContainer.appendChild(templeName);
    const templeLocation = document.createElement('p');
    templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    innerContainer.appendChild(templeLocation);
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    innerContainer.appendChild(dedicated);
    const templeArea = document.createElement('p');
    templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
    innerContainer.appendChild(templeArea);
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `Image of ${temple.templeName}`;
    templeImage.loading = 'lazy';
    innerContainer.appendChild(templeImage); 
    return innerContainer;
    })
    templeCards.forEach(card => {
      container.appendChild(card);
    });
});
const templeCards = temples.map(temple => {
const innerContainer = document.createElement('figure');
const templeName = document.createElement('h3');
templeName.innerHTML = `<strong>${temple.templeName}</strong>`
innerContainer.appendChild(templeName);
const templeLocation = document.createElement('p');
templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
innerContainer.appendChild(templeLocation);
const dedicated = document.createElement('p');
dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
innerContainer.appendChild(dedicated);
const templeArea = document.createElement('p');
templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
innerContainer.appendChild(templeArea);
const templeImage = document.createElement('img');
templeImage.src = temple.imageUrl;
templeImage.alt = `Image of ${temple.templeName}`;
templeImage.loading = 'lazy';
innerContainer.appendChild(templeImage);
return innerContainer;
});
templeCards.forEach(card => {
  container.appendChild(card);
});
const button2 = document.querySelector('.btn2');
const templeOld = document.querySelector('.before-1900');
button2.addEventListener('click', function(){
  templeOld.innerHTML = "";
  container.innerHTML = "";
  div3.innerHTML = "";
  templeLarge.innerHTML = "";
  templeSmall.innerHTML = "";
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
  oldTemples.forEach(temple =>{
    const div1 = document.createElement('figure');
    const templeName = document.createElement('h3');
    templeName.innerHTML = `<strong>${temple.templeName}</strong>`
    div1.appendChild(templeName);
    const templeLocation = document.createElement('p');
    templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    div1.appendChild(templeLocation);
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    div1.appendChild(dedicated);
    const templeArea = document.createElement('p');
    templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
    div1.appendChild(templeArea);
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `Image of ${temple.templeName}`;
    templeImage.loading = 'lazy';
    div1.appendChild(templeImage);
    templeOld.appendChild(div1);
  });
});
const button3 = document.querySelector('.btn3');
const div3 = document.querySelector('.after-2000');
button3.addEventListener('click', function(){
  templeOld.innerHTML = "";
  container.innerHTML = "";
  div3.innerHTML = "";
  templeOld.innerHTML = "";
  templeLarge.innerHTML = "";
  templeSmall.innerHTML = "";
  const newTemples = temples.filter(temple => {
    const newYear = parseInt(temple.dedicated.split(',')[0]);
    return newYear > 2000;
  });
  newTemples.forEach(temple => {
    const figure1 = document.createElement('figure');
    const templeName = document.createElement('h3');
    templeName.innerHTML = `<strong>${temple.templeName}</strong>`
    figure1.appendChild(templeName);
    const templeLocation = document.createElement('p');
    templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    figure1.appendChild(templeLocation);
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    figure1.appendChild(dedicated);
    const templeArea = document.createElement('p');
    templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
    figure1.appendChild(templeArea);
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `Image of ${temple.templeName}`;
    templeImage.loading = 'lazy';
    figure1.appendChild(templeImage);
    div3.appendChild(figure1);
  });
});
const button4 = document.querySelector('.btn4');
const templeLarge = document.querySelector('.large');
button4.addEventListener('click', function(){
  container.innerHTML = "";
  templeOld.innerHTML = "";
  div3.innerHTML = "";
  templeLarge.innerHTML = "";
  templeSmall.innerHTML = "";
  const largeTemples = temples.filter(temple => {
    const area = temple.area;
    return area > 90000;
  });
  largeTemples.forEach(temple =>{
    const figure2 = document.createElement('figure');
    const templeName = document.createElement('h3');
    templeName.innerHTML = `<strong>${temple.templeName}</strong>`
    figure2.appendChild(templeName);
    const templeLocation = document.createElement('p');
    templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    figure2.appendChild(templeLocation);
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    figure2.appendChild(dedicated); 
    const templeArea = document.createElement('p');
    templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
    figure2.appendChild(templeArea);
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `Image of ${temple.templeName}`;
    templeImage.loading = 'lazy';
    figure2.appendChild(templeImage);
    templeLarge.appendChild(figure2);
  });
});
const button5 = document.querySelector('.btn5');
const templeSmall = document.querySelector('.small');
button5.addEventListener('click', function(){
  container.innerHTML = "";
  templeOld.innerHTML = "";
  div3.innerHTML = "";
  templeLarge.innerHTML = "";
  templeSmall.innerHTML = "";
  const smallTemples = temples.filter(temple => {
    const templeArea = temple.area;
    return templeArea < 10000;
  });
  smallTemples.forEach(temple => {
    const figure3 = document.createElement('figure');
    const templeName = document.createElement('h3');
    templeName.innerHTML = `<strong>${temple.templeName}</strong>`
    figure3.appendChild(templeName);   
    const templeLocation = document.createElement('p');
    templeLocation.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    figure3.appendChild(templeLocation);    
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    figure3.appendChild(dedicated);   
    const templeArea = document.createElement('p');
    templeArea.innerHTML = `<strong>Area:</strong> ${temple.area} sq. feet`;
    figure3.appendChild(templeArea);    
    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = `Image of ${temple.templeName}`;
    templeImage.loading = 'lazy';
    figure3.appendChild(templeImage);
    templeSmall.appendChild(figure3);   
  });
});
