import { setLocalStorage, getLocalStorage } from './utils.mjs';
import { findProductById } from './productData.mjs';

function addProductToCart(product) {
  // Retrieve the current cart items from local storage
  const cartItems = getLocalStorage('so-cart');

  // Check if there are any cart items
  if (cartItems.length) {
    // If there are already cart items, add the new product to the existing list
    cartItems.push(product);
    // Save the updated cart items to local storage
    setLocalStorage('so-cart', cartItems);
  } else {
    // If there are no existing cart items, create a new array with the product and save it to local storage
    setLocalStorage('so-cart', [product]);
  }
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCartHandler);

// remove item from cart
document.querySelector('deleteBtn').addEventListener('click', () => {
  console.log('button clicked');
})