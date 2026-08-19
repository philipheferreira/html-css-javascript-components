document.addEventListener("DOMContentLoaded", initialise);
let allProducts;

function initialise() {
  fetchProducts();
}

async function fetchProducts() {
  try {
    // fetch products from fake store api
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    // allProducts variable saved as data response
    allProducts = data;
    console.log(allProducts);
  } catch (error) {
    console.error(error);
  }
}

// displayProducts iterates through allProducts variable
function displayProducts(products) {
  // select element to put the list inside of
  const list = document.querySelector("#list");
  products
    .map((product) => {
      const { image, category, price, title, id } = product;
      // add each item inside the list ul
      list.innerHTML += `
     <li class="card">
      <div class="img-content">
       <img src=${image} alt=${category} />
      </div>
      <div class="card-content">
       <p class="card-price">$${price.toFixed(2)}</p>
       <h4 class="card-title">${title.substring(0, 45)}...</h4>
       <p class="card-desc hide">
      ${category.toUpperCase()}
      </p> 
      <div class="btn-container">
       <button class="card-btn" onclick="addToCart(${id})">Add to Cart</button>
      </div>
     </li>
     
    `;
    })
    .join("");
}

async function fetchProducts() {
  try {
    // fetch products from fake store api
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    // allProducts variable saved as data response
    allProducts = data;
    displayProducts(allProducts); // <= this is the altered code
  } catch (error) {
    console.error(error);
  }
}