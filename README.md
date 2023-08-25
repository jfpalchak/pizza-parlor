# _{Application Name}_

#### By Joey Palchak

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

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
Expected Output: Pizza {size: "small", toppings: ["bacon", "pineapple"], cost: null}
```

#### **Describe:** Pizza.prototype.findToppings()

```javascript
Test 1: "It should return the current value of the Pizza object's topping property, which is an array of strings."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findToppings();
Expected Output: ["bacon", "pineapple"]

```

#### **Describe:** Pizza.prototype.findSize()

```javascript
Test 1: "It should return the current value of the Pizza object's size property."
Code:
  const newPizza = new Pizza("small", ["bacon", "pineapple"]);
  newPizza.findSize();
Expected Output: "small"

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