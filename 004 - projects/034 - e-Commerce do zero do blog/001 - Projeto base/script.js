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