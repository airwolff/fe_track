//////////////////////////////////////////////////////////
//  Rest Operator
//////////////////////////////////////////////////////////
// In this example, the first argument is mapped to "a" and the second to "b",  so these named arguments are used like normal. However the third argument
// "manyMoreArgs" will be an array that contains the 3rd, 4th, 5th, 6th ... nth -- as many arguments that the user includes.

function myFun(a, b, ...manyMoreArgs) {
  console.log('a', a);
  console.log('b', b);
  console.log('manyMoreArgs', manyMoreArgs);
}

myFun('one', 'two', 'three', 'four', 'five', 'six');

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

const multiply = function(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
};

let arr = multiply(2, 1, 2, 3); // first argument is the multiplier, rest operator iterates over array and uses multiplier on each
console.log(arr); // [2, 4, 6]

//   Rest Operator (...arg) with Function Parameters
const sum = (function(...args) {
  return function sum(...arg) {
    const args = [...arg];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //10
console.log(sum(5)); //5
console.log(sum()); //0


// Write Higher Order Arrow Functions
('use strict');
const squaredIntegers = arr
  .filter(args => args > 0 && args % parseInt(args) === 0)
  .map(args => Math.pow(args, 2));
return squaredIntegers;

const realargsberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = arr => {
  'use strict';

  const squaredIntegers = arr.filter(argsber => argsber > 0);

  squaredIntegers.map(square => Math.pow(square, 2));

  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realargsberArray);
console.log(squaredIntegers);

// ES6: Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.
// Check out this code:
// function greeting(name = "Anonymous") {
//   return "Hello " + name;
// }
// console.log(greeting("John")); // Hello John
// console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

const increment = (function() {
  'use strict';
  return function increment(argsber, value = 1) {
    return argsber + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

//   Spread Operator ...arg



class ToDoClass {
  constructor() {
      alert('Hello World');
  }
}
let toDo;
window.addEventListener("load", () => {
  toDo = new toDoClass();
});

// window.addEventListener attaches an event listener to the window and waits to finish loading. Once loaded, the load event is fired, which calls the callback function of our event listener that initializes ToDoClass and assigns it to a variable toDo. While ToDoClass is initialized, it automatically calls the constructor

// Arrow functions and inherit the this object of its parent instead of binding its own. 

let a = function(x) {
}
let b = function(x, y) {
}

// equals 

let a = x => {}
let b = (x,y) => x+y;

// An enclosing block is a block of code between two curly braces {}

const a = 5;
a = 7; // this will not work
const b = {
a: 1,
b: 2
};
b = { a: 2, b: 2 }; // this will not work
b.a = 2; // this will work since only a property of b is changed

// While writing code in ES6, always use const to declare your variables. Use let only when you need to perform any changes (reassignments) to the variable and completely avoid using var.

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//  DOM
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const myHeading = document.getElementById('myHeading');
// selection for identifying element
// document = global variable representing current webpage
// .getElementById('myHeading'); belongs to document object

myHeading.addEventListener('click', () => {
  myHeading.style.color = 'red';
});


const myParagraph = document.getElementsByTagName('p');
// works similar to ById but returns an array which can iterate over with for loop or target by index.
for (let i = 0; i < myList.length; i +=1) {
  myList[i].style.color = "green";
}


const myError = document.getElementsByClassName('error');

document.querySelectorAll('li');
// returns all

document.querySelector('li');
// returns first

document.querySelector('#myHeading');
// can select id or class by using CSS selector i.e. # for id or . for class

document.querySelectorAll('title=title');


//////////////////////////////////////////////////////////
//  Traversing DOM
//////////////////////////////////////////////////////////
// DOM methods return a collection not a JavaScript array, the collection is called an HTMLCollection, an “array-like” object.  Iterate over it with a for loop, but
//methods such as map, filter, and reduce aren't available.
// Can convert an HTMLCollection to an array by using the spread operator: [...document.getElementsByTagName(p)].

const callouts = document.getElementsByClassName('callout');
// OR
const callouts = document.getElementById('callout');

const paragraphs = document.getElementsByTagName('p'); //

const para1 = document.getElementsByTagName('p')[0]; // first p tag

element = document.querySelector(selectors); //A DOMString containing one or more selectors to match. This string must be a valid CSS selector string;

para1.textContent; // "This is a simple HTML file."
para1.innerHTML; // "This is a <i>simple</i> HTML file."
para1.textContent = 'Modified HTML file'; // look for change in browser
para1.innerHTML = '<i>Modified</i> HTML file'; // look for change in browser

//////////////////////////////////////////////////////////
//  Manipulating DOM
//////////////////////////////////////////////////////////

const input = document.querySelector('input');
const p = document.querySelector('p.description'); // p.description p=element .description = class
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

// to get class name must use className .class WON'T WORK

const inputValue = document.querySelector('#linkName').value; //gets value of id linkName;
document.querySelector('#link').textContent = inputValue; // assigns value of linkName to id link







