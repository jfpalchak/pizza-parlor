// ********************
// *  BUSINESS LOGIC  *
// ********************

// BUSINESS LOGIC for Pizza ------------------

function Pizza(size, toppingsList) {
  this.size = size;
  this.toppings = toppingsList;
  this.cost = null;
}







// ********************
// *     UI LOGIC     *
// ********************

// handle all UI Logic
function handleEverything() {

}

// run all scripts after page resources are loaded
window.addEventListener("load", handleEverything);