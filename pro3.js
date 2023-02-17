let shoppingCart = [];

function addToCart(productName, productPriceText, productImage) {

    let productPrice = parseFloat(productPriceText.replace('$', ''));
  

    if (!isNaN(productPrice)) {
        let product = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        shoppingCart.push(product);
        saveCart();
        let cartCount = parseInt(document.getElementById('cart-count').innerText);
        cartCount++;
          
        document.getElementById('cart-count').innerText = cartCount;
        localStorage.setItem('cartCount', cartCount);
        alert('Added to your Shopping Bag');
    } else {
        console.error(`Invalid price for product: ${productName}`);
    }
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
