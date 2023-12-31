// ********************
// *  BUSINESS LOGIC  *
// ********************

// BUSINESS LOGIC for Pizza ------------------

//constructor for Pizza object
function Pizza(pizzaSize, toppingsList) {
  this.size = pizzaSize;
  this.toppings = toppingsList;
  this.cost = 0;
}

// returns an array of the toppings for Pizza object
Pizza.prototype.findToppings = function() {
  return this.toppings;
};

// returns the length of the array of toppings for the Pizza object
Pizza.prototype.findToppingsPrice = function() {
  return this.findToppings().length;
};

// returns value of size property for the Pizza object
Pizza.prototype.findSize = function() {
  return this.size;
};

// returns a number, depending on the size property for the Pizza object
Pizza.prototype.findSizePrice = function() {
  switch (this.findSize()) {
    case ('slice'):
      return 5;
    case ('small'):
      return 15;
    case ('medium'):
      return 18;
    case ('large'):
      return 20;
    default:
      return 0;
  }
};

// returns the sum of the size price and the toppings price
Pizza.prototype.determineCost = function() {
  this.cost = this.findToppingsPrice() + this.findSizePrice();
  return this.cost;
};

// BUSINESS LOGIC for ShoppingCart ------------------

// constructor for ShoppingCart object
function ShoppingCart() {
  this.cart = {};
  this.currentId = 0;
}

// returns the currentId property of ShoppingCart after incrementing by 1
ShoppingCart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// add's a Pizza object to the ShoppingCart
ShoppingCart.prototype.addPizza = function(pizza) {
  this.cart[this.assignId()] = pizza;
};

// return a specific pizza from the cart object
ShoppingCart.prototype.findPizza = function(id) {
  if (this.cart[id]) {
    return this.cart[id];
  }
  return false;
};

// removes a specific pizza from the cart object
ShoppingCart.prototype.removePizza = function(id) {
  if (this.cart[id]) {
    delete this.cart[id];
    return true;
  }
  return false;
};

// return the cart object from ShoppingCart
ShoppingCart.prototype.showCart = function() {
  return this.cart;
};

// return the sum of the costs of every pizza in ShoppingCart's cart
ShoppingCart.prototype.determineTotalCost = function() {
  let totalCost = 0;

  keyArray = Object.keys(this.showCart());

  keyArray.forEach(function(key) {
    let pizza = this.findPizza(key);
    totalCost += pizza.determineCost();
  }.bind(this));
  
  return totalCost;
};

// ********************
// *     UI LOGIC     *
// ********************

// display final cost of the user's pizza order
function displayFinalCost(userCart) {
  const order = document.querySelector('span#customer-order');
  order.innerText = null;
  
  const finalCost = "$" + userCart.determineTotalCost();

  order.append(finalCost);
  document.querySelector('div.final-cost').removeAttribute('id','hidden');

}

// display a list of all the pizza's added by the user
function displayCartItems(cartToDisplay) {

  const pizzaList = document.querySelector('span#pizza-list');
  pizzaList.innerText = null;

  const ul = document.createElement('ul');
  Object.keys(cartToDisplay.showCart()).forEach(function(key) { 
    const pizza = cartToDisplay.findPizza(key);
    const li = document.createElement('li');
    const displayText = "Item - Pizza: " + pizza.findSize();
    li.append(displayText);
    li.setAttribute("id", key);
    ul.append(li);
  });

  pizzaList.append(ul);

  displayFinalCost(cartToDisplay);

}

// display the toppings and total price for the item that is clicked on
function displayItemDetails(userCart, e) {
  
    const pizzaToDisplay = userCart.findPizza(e.target.id);

    // in case user clicks something irrelevant
    if (!pizzaToDisplay) {
      return false;
    }

    const pizzaToppings = pizzaToDisplay.findToppings();
    const pizzaPrice = pizzaToDisplay.determineCost();

    const ul = document.createElement('ul');
    pizzaToppings.forEach(function(topping) {
      const li = document.createElement('li');
      li.append(topping);
      ul.append(li);
    });

    const priceTag = document.createElement('span');
    priceTag.setAttribute('id', 'red'); 
    priceTag.append("Item total: $" + pizzaPrice);

    const itemElement = document.getElementById("" + e.target.id);
    itemElement.append(ul);
    itemElement.append(priceTag);

    const removeButton = document.querySelector('button.remove-item');
    removeButton.setAttribute('id', e.target.id);
}

// using the NodeList object of checked checkbox elements as a parameter,
// return an array of the user's selected pizza toppings
function getUserSelectedToppings(checkedToppings) {
  
  const pizzaToppings = [];

  const checkedToppingsArray = Array.from(checkedToppings);
  checkedToppingsArray.forEach(function(checkbox) {
    pizzaToppings.push(checkbox.value);
    checkbox.checked = false;
  });

  return pizzaToppings;
}

// handle the pizza form submit event
function handleSubmitPizzaForm(userCart) {

  const pizzaForm = document.querySelector('form');
  pizzaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const pizzaSize = document.getElementById('size').value;
    const selectedToppings = document.querySelectorAll('input:checked');
    const pizzaToppings = getUserSelectedToppings(selectedToppings);

    const pizza = new Pizza(pizzaSize, pizzaToppings);
    userCart.addPizza(pizza);

    displayCartItems(userCart);

  });
}

// handle the click event on shopping cart items
function handleCartItemDisplay(userCart) {
  
  const pizzaItems = document.querySelector('div#shopping-cart-pizzas');
  pizzaItems.addEventListener('click', function(event) {
    
    displayCartItems(userCart);

    displayItemDetails(userCart, event);

  });
}

// handle the click event on the 'Remove Item' button
function handleRemoveItems(userCart) {

  const removeButton = document.querySelector('button.remove-item');
  removeButton.addEventListener('click', function(event) {

    userCart.removePizza(event.target.id);

    displayCartItems(userCart);

  });
}

// handle all events and ShoppingCart
function handleEverything() { 

  const userCart = new ShoppingCart();
  
  handleSubmitPizzaForm(userCart);

  handleCartItemDisplay(userCart);

  handleRemoveItems(userCart);

}

// run all scripts after page resources are loaded
window.addEventListener('load', handleEverything);