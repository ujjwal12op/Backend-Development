// Chapter 2: Functions and Scope
// What is a Function?
// A function is a block of code that performs a specific task. It can take inputs (parameters) and return an output.

// Chapter 2.1: Declaring Functions
// Function Declaration:

// javascript
// Copy
// function greet(name) {
//   return "Hello, " + name;
// }
// console.log(greet("Alice")); // Output: Hello, Alice
// Function Expression:

// javascript
// Copy
// const greet = function(name) {
//   return "Hello, " + name;
// };
// console.log(greet("Bob")); // Output: Hello, Bob
// Chapter 2.2: Arrow Functions (ES6)
// A shorter way to write functions.

// javascript
// Copy
// const greet = (name) => {
//   return "Hello, " + name;
// };
// console.log(greet("Charlie")); // Output: Hello, Charlie
// If the function has only one statement, you can simplify it:

// javascript
// Copy
// const greet = (name) => "Hello, " + name;
// console.log(greet("Dave")); // Output: Hello, Dave
// Chapter 2.3: Scope
// Global Scope: Variables declared outside any function.

// javascript
// Copy
// let globalVar = "I'm global!";
// function checkScope() {
//   console.log(globalVar); // Accessible
// }
// checkScope();
// Local Scope: Variables declared inside a function.

// javascript
// Copy
// function checkScope() {
//   let localVar = "I'm local!";
//   console.log(localVar); // Accessible
// }
// console.log(localVar); // Error: localVar is not defined
// Chapter 2.4: Default Parameters
// Set default values for function parameters.

// javascript
// Copy
// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// console.log(greet()); // Output: Hello, Guest
// console.log(greet("Eve")); // Output: Hello, Eve
// Assignments for Chapter 2
// Assignment 1: Write a function add that takes two numbers as parameters and returns their sum.

// javascript
// Copy
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 3)); // Output: 8
// Assignment 2: Write a function isEven that takes a number and returns true if it’s even, otherwise false.

// javascript
// Copy
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(4)); // Output: true
// console.log(isEven(7)); // Output: false
// Assignment 3: Write a function greetUser that takes a name and a greeting message (default: "Hello") and returns the formatted message.

// javascript
// Copy
// function greetUser(name, greeting = "Hello") {
//   return `${greeting}, ${name}!`;
// }
// console.log(greetUser("Alice")); // Output: Hello, Alice!
// console.log(greetUser("Bob", "Hi")); // Output: Hi, Bob!
// Mini Project for Chapter 2
// Project: Build a simple calculator.

// Create functions for addition, subtraction, multiplication, and division.

// Use a switch statement to perform the operation based on user input.

// Solution:

// javascript
// Copy
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// let operation = prompt("Enter operation (add, subtract, multiply, divide):");
// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));

// let result;
// switch (operation) {
//   case "add":
//     result = add(num1, num2);
//     break;
//   case "subtract":
//     result = subtract(num1, num2);
//     break;
//   case "multiply":
//     result = multiply(num1, num2);
//     break;
//   case "divide":
//     result = divide(num1, num2);
//     break;
//   default:
//     result = "Invalid operation";
// }

// console.log("Result:", result);