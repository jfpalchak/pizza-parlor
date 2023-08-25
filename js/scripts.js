// ********************
// *  BUSINESS LOGIC  *
// ********************

// BUSINESS LOGIC for Pizza ------------------

function Pizza(size, toppingsList) {
  this.size = size;
  this.toppings = toppingsList;
  this.cost = null;
}

// returns value of toppings property for Pizza object
Pizza.prototype.findToppings = function() {
  return this.toppings;
}

Pizza.prototype.findSize = function() {
  return this.size;
}





// ********************
// *     UI LOGIC     *
// ********************

// handle all UI Logic
function handleEverything() {

}

// run all scripts after page resources are loaded
window.addEventListener("load", handleEverything);