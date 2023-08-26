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

// returns value of toppings property for Pizza object
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

// returns a number, depending on the size property for the Pizza object // TO DO: turn into switch case
Pizza.prototype.findSizePrice = function() {
  const size = this.findSize();
  if (size === 'small') {
    return 15;
  } else if (size === 'medium') {
    return 18;
  } else if (size === 'large') {
    return 20;
  } else if (size === 'slice') {
    return 5;
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
  if (this.cart[id] !== undefined) {
    return this.cart[id];
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
  for (let i=1; i <= keyArray.length; i++){
    let pizza = this.findPizza(i);
    totalCost += pizza.determineCost();
  }
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
    const displayText = "Item " + key + " - Pizza: " + pizza.findSize();
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
    ul.setAttribute('id', e.target.id); // TO DO: styling on item details
    pizzaToppings.forEach(function(topping) {
      const li = document.createElement('li');
      li.append(topping);
      ul.append(li);
    });

    const priceTag = document.createElement('span');
    priceTag.setAttribute('id', 'red'); // TO DO: styling on price tag
    priceTag.append("Item total: $" + pizzaPrice);

    const itemElement = document.getElementById("" + e.target.id);
    itemElement.append(ul);
    itemElement.append(priceTag);
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

// handle all events and UI logic
function handleEverything() { // TO DO: add delete item / empty cart button

  const userCart = new ShoppingCart();
  
  // handle the pizza form submit event
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

  // handle the click event on shopping cart items
  const pizzaItems = document.querySelector('div#shopping-cart-pizzas');
  pizzaItems.addEventListener('click', function(event) {
    
    displayCartItems(userCart);

    displayItemDetails(userCart, event);

  });

}

// run all scripts after page resources are loaded
window.addEventListener('load', handleEverything);