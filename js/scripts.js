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

// returns value of size property for Pizza object
Pizza.prototype.findSize = function() {
  return this.size;
};

Pizza.prototype.determineCost = function() {
  return this.findToppings().length;
}




// ********************
// *     UI LOGIC     *
// ********************

// handle all UI Logic
function handleEverything() {

}

// run all scripts after page resources are loaded
window.addEventListener("load", handleEverything);