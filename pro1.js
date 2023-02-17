let shoppingCart = [];

function addToCart(productName, productPriceText, productImage) {
  let productPrice = parseFloat(productPriceText.replace('$', ''));

  let productIndex = -1;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === productName) {
      productIndex = i;
      break;
    }
  }

  if (productIndex === -1) {
    // Product does not exist in cart, add new product
    let product = {
      name: productName,
      price: productPrice,
      quantity: 1,
      image: productImage
    };
    shoppingCart.push(product);
  } else {
    // Product already exists in cart, increase quantity
    shoppingCart[productIndex].quantity++;
  }

  saveCart();
  let cartCount = parseInt(document.getElementById('cart-count').innerText);
  cartCount++;

  document.getElementById('cart-count').innerText = cartCount;
  localStorage.setItem('cartCount', cartCount);
  alert('Added to your Shopping Bag');
}

function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(shoppingCart));
}

function loadCart() {
  let cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    shoppingCart = JSON.parse(cartItems);
  }
}

loadCart();

let addToCartButton = document.querySelector("#add-to-cart");
addToCartButton.addEventListener("click", function() {
  let productName = document.querySelector("h4").textContent;
  let productPrice = document.querySelector("h2").textContent;
  let productImage = document.querySelector("#main").src;
  addToCart(productName, productPrice, productImage);
  addToCartButton.innerText = "Added to bag";
});

window.onload = function() {
  let cartCount = localStorage.getItem('cartCount');
  if (cartCount) {
    document.getElementById('cart-count').innerText = cartCount;
  }
};

