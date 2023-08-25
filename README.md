# _Pizza Parlor_

#### By Joey Palchak

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

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




## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT License

Copyright (c) 8/25/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.