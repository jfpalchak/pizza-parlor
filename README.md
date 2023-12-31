# _Pizza Parlor_

#### By Joey Palchak

#### _A mock pizza ordering webpage application, utilizing Object-Oriented JavaScript, TDD, and HTML, CSS, and JavaScript._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_Pizza Parlor_ is a web application that mocks an online order page. Upon viewing the site, a user is provided with a simple form, which asks for two types of input:
  1. A dropdown menu in which the user can select the size of Pizza they'd like to order, and
  2. A number of checkboxes, each of which the user has the option to check or leave un-checked. 

Upon making their selections, the user can select 'Add to Cart', at which point their Pizza order will be presented in the 'Shopping Cart' container to the right of the page. Depending on the combination of inputs selected in the form before submitting their order, the user will notice a handful of new elements appear on the webpage:
  * The Pizza item will appear in the shopping cart, identified initially by the selected size.
  * The total cost of the item(s) in the shopping cart, below the cart's container, presented in bold red text.
  * A 'Remove Item' button displayed beside the total cost of the user's order.

If the user wishes to check the details of their order, they can click on the bulleted item displayed in the shopping cart. Doing so will display each selected topping for that specific Pizza object, as well as the total price of the Pizza, which itself will display in red text.

Should the user wish to add another Pizza to their order, they may submit the form as many times as they wish. Not only will each Pizza order append to the list displayed in the shopping cart, but the total cost of the items will change with respect to the details of each order. 

Additionally, the user may remove a specific item from their shopping cart. They can do so by completing the following steps:
  1. Click on the bulleted Pizza item they wish to remove.
  2. Click the 'Remove Item' button below the shopping cart container. 

The final cost of the shopping cart will continue to reflect each individual change made by the user. 

The prices for each Pizza are determined by the following formula:
```
Total Cost = Price of Pizza Toppings + Price of Pizza Size
```
Where the price of the user's selected toppings is simply:
```
Price of Pizza Toppings = $1 * Number of Toppings Selected
```
And the price of each Pizza size is represented in the table below:

| Size      | Price    |
| :-------: | -------- |
| Slice      |   $5   |
| Small      |   $15  |
| Medium     |   $18  |
| Large      |   $20  |


## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/jfpalchak/pizza-parlor.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone https://github.com/jfpalchak/pizza-parlor.git
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

##### _Alternatively:_

1. Go to the website directly via **[GitHub Pages](https://jfpalchak.github.io/pizza-parlor/)**.

## Tests

#### **Describe:** Pizza()

```javascript
Test 1: "It should return a Pizza object with two properties for size and toppings."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
Expected Output: Pizza {size: "small", toppings: ["bacon", "pineapple"]}

Test 2: "It should return a Pizza object with three properties for size, toppings, and cost, while only taking arguments for size and toppings."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
Expected Output: Pizza {size: "small", toppings: ["bacon", "pineapple"], cost: 0}
```

#### **Describe:** Pizza.prototype.findToppings()

```javascript
Test 1: "It should return the current value of the Pizza object's topping property, which is an array of strings."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findToppings();
Expected Output: ["bacon", "pineapple"]

```

#### **Describe:** Pizza.prototype.findToppingsPrice()

```javascript
Test 1: "It should return the current value of the Pizza object's topping property, which is an array of strings."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findToppingsPrice();
Expected Output: ["bacon", "pineapple"]

Test 2: "It should return the length of the number of items currently in the Pizza object's topping property."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findToppingsPrice();
Expected Output: 2

```

#### **Describe:** Pizza.prototype.findSize()

```javascript
Test 1: "It should return the current value of the Pizza object's size property, which is a string."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findSize();
Expected Output: "small"

```

#### **Describe:** Pizza.prototype.findSizePrice()

```javascript
Test 1: "It should return the current value of the Pizza object's size property, which is a string."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findSizePrice();
Expected Output: "small"

Test 2: "It should return the number '15' if the current value of the Pizza object's size property is 'small'."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findSizePrice();
Expected Output: 15

Test 3: "It should return the number '18' if the current value of the Pizza object's size property is 'medium'."
Code:
  const newPizza = new Pizza("medium", ["bacon", "pineapple"]);
  newPizza.findSizePrice();
Expected Output: 18

Test 4: "It should return the number '20' if the current value of the Pizza object's size property is 'large'."
Code:
  const newPizza = new Pizza("large", ["bacon", "pineapple"]);
  newPizza.findSizePrice();
Expected Output: 20

Test 5: "It should return the number '5' if the current value of the Pizza object's size property is 'slice'."
Code:
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  newPizza.findSizePrice();
Expected Output: 5

```

#### **Describe:** Pizza.prototype.determineCost()

```javascript
Test 1: "It should return the initial value of the Pizza object's cost property, which is '0'."
Code:
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  newPizza.determineCost();
Expected Output: 0

Test 2: "It should return the sum of the initial value of the Pizza object's cost property ('0') and the price value for a 'slice' of pizza (determined using findSizePrice()), which is '5'."
Code:
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  newPizza.determineCost();
Expected Output: 5

Test 3: "It should return the sum of the price value for a 'slice' of pizza ('5'), and the price value of two toppings (determined using findToppingsPrice()), which is '2'."
Code:
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  newPizza.determineCost();
Expected Output: 7

Test 4: "It should set the Pizza object's cost property to the sum of the size price and toppings price, as well as return this sum."
Code:
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  const totalPrice = newPizza.determineCost();
  newPizza;
Expected Output: Pizza {size: "slice", toppings: ["bacon", "pineapple"], cost: 7}

```

#### **Describe:** ShoppingCart()

```javascript
Test 1: "It should construct a ShoppingCart object containing an empty object called cart."
Code:
  const shoppingCart = new ShoppingCart();
Expected Output: ShoppingCart { cart: {} }

Test 2: "It should construct a ShoppingCart object containing an empty object called cart and a property called currentId that's initialized to '0'."
Code:
  const shoppingCart = new ShoppingCart();
Expected Output: ShoppingCart { cart: {}, currentId: 0}

```

#### **Describe:** ShoppingCart.prototype.assignId()

```javascript
Test 1: "It should return the ShoppingCart object's currentId value."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.assignId();
Expected Output: 0

Test 2: "It should return the ShoppingCart object's currentId value, plus 1."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.assignId();
Expected Output: 1

Test 3: "It should increment the ShoppingCart object's currentId value by 1, and return that value."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.assignId();
Expected Output: 1

```

#### **Describe:** ShoppingCart.prototype.addPizza()

```javascript
Test 1: "It should return the empty cart property of the ShoppingCart object."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.addPizza();
Expected Output: {}

Test 2: "It should add a Pizza object to the empty cart object of ShoppingCart."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart;
Expected Output: ShoppingCart { slice: Pizza}

Test 3: "It should add a Pizza object to the empty cart object of ShoppingCart, and assign that Pizza object an ID for the key."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart;
Expected Output: ShoppingCart { 1: Pizza}

```

#### **Describe:** ShoppingCart.prototype.showCart()

```javascript
Test 1: "It should return an empty cart object from ShoppingCart object."
Code: 
  const shoppingCart = new ShoppingCart();
  shoppingCart.showCart();
Expected Output: {}

Test 2: "It should return the cart object, containing a Pizza object."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.showCart();
Expected Output: { 1: Pizza}

```

#### **Describe:** ShoppingCart.prototype.findPizza()

```javascript
Test 1: "It should return the ShoppingCart's cart object."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.findPizza();
Expected Output: {}

Test 2: "It should return a Pizza object from the ShoppingCart's cart object, when given the corresponding key (or, assigned ID) for that Pizza."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.findPizza(1);
Expected Output: Pizza {size: 'slice', toppings: Array(2), cost: 0}

Test 3: "It should return the boolean value false if a key is passed through the method for a Pizza object that does not exist within the cart object."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.findPizza(3);
Expected Output: false

```

#### **Describe:** ShoppingCart.prototype.removePizza()

```javascript
Test 1: "It should return the ShoppingCart's cart object."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.removePizza();
Expected Output: {}

Test 2: "It should return a boolean value true if a specified Pizza is found in the ShoppingCart's cart object, when given the corresponding key (or, assigned ID) for that Pizza."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.removePizza(1);
Expected Output: true

Test 3: "It should remove the Pizza object from the ShoppingCart's cart object, when giving the corresponding key (or, assigned ID) for that Pizza."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.removePizza(1);
Expected Output: true

Test 4: "It should return the boolean value false if a key is passed through the method for a Pizza object that does not exist within the cart object."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.removePizza(3);
Expected Output: false

```

#### **Describe:** ShoppingCart.prototype.determineTotalCost()

```javascript
Test 1: "It should return 0 if the ShoppingCart's cart object is empty."
Code:
  const shoppingCart = new ShoppingCart();
  shoppingCart.determineTotalCost();
Expected Output: 0

Test 2: "It should return the total cost of a single Pizza object in the ShoppingCart's cart."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.determineTotalCost();
Expected Output: 7

Test 3: "It should return the sum of multiple Pizza objects in the ShoppingCart's cart."
Code:
  const shoppingCart = new ShoppingCart();
  const newPizza = new Pizza("slice", ["bacon", "pineapple"]);
  const newPizza2 = new Pizza("slice", ["bacon", "pineapple"]);
  shoppingCart.addPizza(newPizza);
  shoppingCart.addPizza(newPizza2);
  shoppingCart.determineTotalCost();
Expected Output: 14

```

## Known Bugs

* If all items are deleted from the shopping cart, the 'Total' and 'Remove Item' button remain visible.

## License

MIT License

Copyright (c) 8/25/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.