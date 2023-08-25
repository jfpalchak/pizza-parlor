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
}

// returns value of size property for Pizza object
Pizza.prototype.findSize = function() {
  return this.size;
};

Pizza.prototype.findSizePrice = function() {
  const size = this.findSize();
  if (size === 'small') {
    return 15;
  }
};




// ********************
// *     UI LOGIC     *
// ********************

// handle all UI Logic
function handleEverything() {

}

// run all scripts after page resources are loaded
window.addEventListener("load", handleEverything);