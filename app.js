const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProduct(name);
  }
};

const addItem = () => {
  const nameField = document.getElementById("product-name");
  const name = nameField.value;
  if (!name) {
    return;
  }
  // display in the ui
  displayProduct(name);
  // add to local storage
  addProductToCart(name);
  // clear textfield
  nameField.value = "";
};

const displayProduct = (name) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartobj;
  if (cart) {
    cartobj = JSON.parse(cart);
  } else {
    cartobj = {};
  }
  return cartobj;
};

const addProductToCart = (name) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }

  const cartStringfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfy);
};

// clear display and storage to click place order button

const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
displayLocalStorageCart();
