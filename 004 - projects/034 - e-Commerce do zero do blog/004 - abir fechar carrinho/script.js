document.addEventListener("DOMContentLoaded", initialise);
let allProducts;

function initialise() {
  fetchProducts();
  filterCategories(); // <= added function 
  searchProduct();
  openCart();
  closeCart();
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


function filterCategories() {
  // 1 - select the select element
  const select = document.querySelector("#filter-btn");
  // 2 - add onchange event listener
  select.addEventListener("change", filterProducts);

  // 3 - create filter function
  function filterProducts(e) {
    // select element to put filtered list inside of
    let list = document.querySelector("#list");
    // create variable that will be the filtered html depending on value
    let content;
    // create variable to use for switch case - need to know the select value
    let option = e.target.value;

    // clear existing list
    list.innerHTML = "";

    // if option equal to one of the cases, content is equal to the filtered option
    switch (option) {
      case "all":
        content = allProducts;
        break;
      case "men":
        content = allProducts.filter((product) => {
          return product.category === "men's clothing";
        });
        break;
      case "women":
        content = allProducts.filter((product) => {
          return product.category === "women's clothing";
        });
        break;
      case "jewellery":
        content = allProducts.filter((product) => {
          return product.category === "jewelery";
        });
        break;
      case "electronics":
        content = allProducts.filter((product) => {
          return product.category === "electronics";
        });
        break;
      default:
        content = allProducts;
    }
    // content then iterated over and displayed inside list
    content
      .map((product) => {
        const { image, category, price, title, id } = product;
        list.innerHTML += `
    <li class="card">
    
    <div class="img-content">
    <img src=${image} alt=${category} />
    </div>
    <div class="card-content">
    <p class="card-price">$${price}</p>
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
}


// permite pesquisar um produto
function searchProduct() {
  // 1. Select element
  const searchInput = document.querySelector("#search-input");
  const list = document.querySelector("#list");
  // 2. add event listener
  searchInput.addEventListener("keyup", (e) => {
    list.innerHTML = "";
    // 3. get value from input
    let searchTerm = e.target.value.toLowerCase();
    // 4. filter products array and return filtered products
    let content = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm);
    });
    content
      .map((product) => {
        const { image, price, category, title, id } = product;
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
  });
}

// funcao abrir o carrinho

function openCart() {
  const cartBtn = document.querySelector(".cart-container");
  // on click, open modal
  cartBtn.addEventListener("click", seeModal);
}

// see modal function
function seeModal() {
  const body = document.body;
  const cartModal = document.querySelector(".modal");
  cartModal.classList.remove("hide");
  body.classList.add("modal-open");
}

// funcao fechar carrinho

function closeCart() {
  const closeBtn = document.querySelector(".fa-xmark");
  closeBtn.addEventListener("click", closeModal);
}

function closeModal() {
  const body = document.body;
  const cartModal = document.querySelector(".modal");
  cartModal.classList.add("hide");
  body.classList.remove("modal-open");
}

