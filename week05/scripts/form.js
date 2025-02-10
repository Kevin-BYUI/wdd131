const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  const productList = document.querySelector('#product-list');
  products.forEach(product =>{
    const productOptions = document.createElement('option');
    productOptions.value = product.id;
    productOptions.textContent = product.name;
    productList.appendChild(productOptions);  
  });
  window.onload = function() {
    let reviewCount = localStorage.getItem('reviewCount');
    
    // Check if reviewCount exists in localStorage
    if (reviewCount === null) {
        reviewCount = 0; // Initialize to 0 if not found
    } else {
        reviewCount = parseInt(reviewCount, 10); // Parse the value safely as a number
        if (isNaN(reviewCount)) {
            reviewCount = 0; // If parsing fails, reset to 0
        };
    };

    reviewCount++; // Increment the count
    localStorage.setItem('reviewCount', reviewCount); // Save it back to localStorage
    document.querySelector('#reviewCount').value = reviewCount; // Set the value in the hidden input
};
const modification = document.querySelector('.modified');
const rights = document.querySelector('.right');
rights.textContent = 'All Rights Reserved'
const modified = new Date(document.lastModified);
const year = document.querySelector('.year');
year.textContent = modified.getFullYear();
modification.textContent = `Last modified: ${modified.toString()}`;
