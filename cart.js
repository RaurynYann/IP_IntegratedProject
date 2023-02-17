// Get the cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Display the cart items
let cartItemsContainer = document.querySelector('.cart-items');
let orderSubtotalElement = document.querySelector('#order-subtotal');
let orderTotalElement = document.querySelector('#order-total');

if (cartItems && cartItems.length > 0) {
  let orderSubtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    let cartItem = document.createElement('div');
    cartItem.classList.add('box1');
    cartItem.innerHTML = `
      <img src="${product.image}">
      <div class="bagcontent">
        <h3>${product.name}</h3>
        <h4>Price: $${product.price.toFixed(2)}</h4>
        <p class="btn-area"><i class="fa fa-trash" data-index="${i}"></i></p>
        <div class="quantity">
          <div class="btn plus">+</div>
          <div class="count">1</div>
          <div class="btn minus">-</div>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
    orderSubtotal += product.price;
  }
  orderSubtotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
  orderTotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;

  // Add event listener to the trash icon
  let trashIcons = document.querySelectorAll('.fa-trash');
  for (let i = 0; i < trashIcons.length; i++) {
    let trashIcon = trashIcons[i];
    trashIcon.addEventListener('click', function() {
      let index = parseInt(trashIcon.getAttribute('data-index'));
      cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert('The product was removed from your shopping bag.');
      location.reload(); // Refresh the page to update the cart
    });
  }

  // Add event listeners to the plus and minus buttons
  let plusButtons = document.querySelectorAll('.btn.plus');
  let minusButtons = document.querySelectorAll('.btn.minus');
  for (let i = 0; i < plusButtons.length; i++) {
    let plusButton = plusButtons[i];
    let minusButton = minusButtons[i];
    let countElement = plusButton.parentNode.querySelector('.count');
    let count = parseInt(countElement.innerText);

    // Add event listener for plus button
    plusButton.addEventListener('click', function() {
      count++;
      countElement.innerText = count;
      alert('Product quantity updated.');
      orderSubtotal += parseFloat(plusButton.parentNode.parentNode.querySelector('h4').textContent.split('$')[1]);
      orderSubtotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
      orderTotalElement.innerText = `$${orderSubtotal.toFixed(2)}`;
    });

    // Add event listener for minus button
    minusButton.addEventListener('click', function() {
      if (count > 1) {
        count--;
        countElement.innerText = count;
        orderSubtotal -= parseFloat(minusButton.parentNode.parentNode.querySelector('h4').textContent.split('$')[1]);
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
