let cartItems = JSON.parse(localStorage.getItem('cartItems'));
let cartItemsContainer = document.querySelector('.cart-items');
let orderSubtotalElement = document.querySelector('#order-subtotal');
let orderTotalElement = document.querySelector('#order-total');

if (cartItems && cartItems.length > 0) {
  let orderSubtotal = 0;
  let cartItemElements = {};

  // Loop through the cart items and display them in the cart view
  for (let i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];

    // Create a unique key for the cart item based on the product name
    let cartItemKey = product.name;

    // If there is already a cart item for this product, update its quantity
    if (cartItemKey in cartItemElements) {
      let cartItemElement = cartItemElements[cartItemKey];
      let countElement = cartItemElement.querySelector('.count');
      let count = parseInt(countElement.innerText);
      count += 1;
      countElement.innerText = count;

      let priceElement = cartItemElement.querySelector('.bagcontent h4');
      let productPrice = parseFloat(product.price);

      let newPrice = productPrice * count;
      priceElement.innerText = `Price: $${newPrice.toFixed(2)}`;

    } else {
      // If there is no cart item for this product yet, create a new one
      let cartItem = document.createElement('div');
      cartItem.classList.add('box1');
      cartItem.innerHTML = `
        <img src="${product.image}">
        <div class="bagcontent">
          <h3>${product.name}</h3>
          <h4>Price: $${parseFloat(product.price).toFixed(2)}</h4>
          <p class="btn-area"><i class="fa fa-trash" data-index="${i}"></i></p>
          <div class="quantity">
            <div class="btn plus">+</div>
            <div class="count">1</div>
            <div class="btn minus">-</div>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);

      // Store a reference to the cart item element for this product
      cartItemElements[cartItemKey] = cartItem;

      // Add event listener to quantity input field
      let countElement = cartItem.querySelector('.count');
      countElement.addEventListener('input', function() {
        let count = parseInt(countElement.innerText);
        if (isNaN(count)) {
          count = 1;
        }
        product.quantity = count;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      });

      // Update quantity in local storage
      product.quantity = 1;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Calculate the order subtotal by multiplying the product price with its count in the cart
    let productPrice = parseFloat(product.price);
    if (isNaN(productPrice)) {
      console.error(`Invalid price for product: ${product.name}`);
      continue;
    }
    orderSubtotal += productPrice * product.quantity;
  }

  // Display the order subtotal and total
  orderSubtotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
  orderTotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
  // Add functionality to the trash icons, plus buttons, and minus buttons
  let trashIcons = document.querySelectorAll('.fa-trash');
  for (let i = 0; i < trashIcons.length; i++) {
    let trashIcon = trashIcons[i];
    trashIcon.addEventListener('click', function() {
      let index = parseInt(trashIcon.getAttribute('data-index'));
      cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert('The product was removed from your shopping bag.');
      location.reload(); 
    });
  }

  let plusButtons = document.querySelectorAll('.btn.plus');
  let minusButtons = document.querySelectorAll('.btn.minus');
  for (let i = 0; i < plusButtons.length; i++) {
    let plusButton = plusButtons[i];
    let minusButton = minusButtons[i];
    let countElement = plusButton.parentNode.querySelector('.count');
    let count = parseInt(countElement.innerText);

    plusButton.addEventListener('click', function() {
      count++;
      countElement.innerText = count;
      alert('Product quantity updated.');
        let productPrice = parseFloat(plusButton.parentNode.parentNode.querySelector('h4').textContent.split('$')[1]);
        orderSubtotal += productPrice;
        orderSubtotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
        orderTotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
      });
  
      minusButton.addEventListener('click', function() {
        if (count > 1) {
          count--;
          countElement.innerText = count;
          let productPrice = parseFloat(minusButton.parentNode.parentNode.querySelector('h4').textContent.split('$')[1]);
          orderSubtotal -= productPrice;
          orderSubtotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
          orderTotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
        }
      });
  
    }
  } else {
    let emptyCartMessage = document.createElement('p');
    emptyCartMessage.innerText = 'Your shopping bag is empty';
    cartItemsContainer.appendChild(emptyCartMessage);
}