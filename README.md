# _Pizza Parlor_

#### By Joey Palchak

#### _A mock pizza ordering webpage application, utilizing Object-Oriented JavaScript, TDD, and HTML, CSS, and JavaScript._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

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

#### **Describe:** ShoppingCart.prototype.determineTotalCost()

```javascript
Test 1:
Code:
Expected Output:

```

## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT License

Copyright (c) 8/25/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.