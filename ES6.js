// ===================================  SPREAD OPERATOR  ==========================

// WITH ARRRAY
const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// OR
const maximus = Math.max(6, 89, 45);
console.log(maximus);

const arr1 = [1, 4, ...arr, 20];
console.log(arr1);
// WITH OBJECT
const obj = { a: 1, b: 23 };
const obj1 = { ...obj };
console.log(obj1);

// That is why they said , the spread operator returns an unpacked array or object

// =============================== REST PARAMETER ===============================
const myFunc = (...args) => {
  console.log('You have passed ', args.length, 'arguments');
};

myFunc(1);
myFunc(1, 4.5);
myFunc(1, 23, 4, 5, 5);

// The Rest Parameter allows to pass a variable number of arguments to a function. These arguments are stored in an array that we can access later.

// ============================================ DESTRUCTURING ======================
// 1-DESTRUCTURING ASSIGNMENT

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// ES5
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// ES6
const { today } = HIGH_TEMPERATURES; //This line will create a variable with the name of today and assigned it the respective value from the object.
const { tomorrow } = HIGH_TEMPERATURES;

console.log(today, tomorrow);

// 2- Destructuring Assigment to Assign variables from objects (Use new variables)

const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;

console.log(HIGH_TEMPERATURES1);

// 3-Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low, high },
} = LOCAL_FORECAST; // Same names from the object
console.log(low, high);
const {
  today: { low: lowToday, high: highToday1 },
} = LOCAL_FORECAST; // Use diffrent variable names from the object
console.log(lowToday, highToday1);

// 4-Destructuring Assignment to Assign Variables from Arrays
// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b);

// 5- Destructuring via rest elements
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// The result is similar to Array.prototype.slice(), as shown below:

const [z, v, ...arr_rest] = [1, 2, 3, 4, 5, 7];
console.log(z, v);
console.log(arr_rest);
// The console would display the values 1, 2 and [3, 4, 5, 7].

function removeFirstTwo(list) {
  // Only change code below this line

  const [, , ...shorterList] = list;
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// 6-Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.
// Consider the code below:

// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }
// This effectively destructures the object sent into the function. This can also be done in-place:
// const profileUpdate = ({ name, age, nationality, location }) => {
// }
// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats));

// ====================================================== Create Strings using Template Literals (``) =================================
// A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
// Consider the code below:

const person = {
  name: 'Zodiac Hasbro',
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

//==============================================================Write Concise Object Literal Declarations Using Object Property Shorthand===============================

// ES6 adds some nice support for easily defining object literals.

// Consider the following code:

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
// getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });

// ========================================================= Write Concise Declarative Functions with ES6 ==============================================================
// Write Concise Declarative Functions with ES6
// When defining functions within objects in ES5, we have to use the keyword function as follows:

// const person = {
//   name: "Taylor",
//   sayHello: function() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };
// With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

// const person = {
//   name: "Taylor",
//   sayHello() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };

// ================================================================= Create a JavaScript Promise =================================================
// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

// const myPromise = new Promise((resolve, reject) => {

// });

// ================================================================== Complete a Promise with resolve and reject ===========================================
// A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

// const myPromise = new Promise((resolve, reject) => {
//   if(condition here) {
//     resolve("Promise was fulfilled");
//   } else {
//     reject("Promise was rejected");
//   }
// });
// The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

// ====================================================================== Handle a Fulfilled Promise with then ======================================================

// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

// myPromise.then(result => {

// });
// result comes from the argument given to the resolve method.

// ================================================================= Handle a Rejected Promise with catch ===========================================================
// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

// myPromise.catch(error => {

// });
// error is the argument passed in to the reject method.
