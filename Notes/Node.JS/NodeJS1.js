// Great choice! Let’s dive into Node.js, which is a runtime environment that allows you to run JavaScript on the server. It’s a critical skill for backend development, and we’ll start from the basics and gradually build up your knowledge.

// Chapter 1: Introduction to Node.js
// What is Node.js?
// Node.js is a runtime environment that allows you to run JavaScript outside the browser (on the server).

// It’s built on Chrome’s V8 JavaScript engine.

// It’s non-blocking and event-driven, making it ideal for building scalable and fast backend applications.

// Chapter 1.1: Installing Node.js
// Download and Install:

// Go to the official Node.js website.

// Download the LTS (Long Term Support) version for stability.

// Follow the installation instructions for your operating system.

// Verify Installation:

// Open your terminal or command prompt.

// Run the following commands:

// bash
// Copy
// node -v
// npm -v
// These commands should display the installed versions of Node.js and npm (Node Package Manager).

// Chapter 1.2: Your First Node.js Program
// Create a new file called app.js.

// Write the following code:

// javascript
// Copy
// console.log("Hello, Node.js!");
// Run the file using Node.js:

// bash
// Copy
// node app.js
// Output:

// Copy
// Hello, Node.js!
// Chapter 1.3: Node.js Modules
// Node.js uses a module system to organize code.

// Core Modules: Built-in modules like fs, http, path, etc.

// Custom Modules: You can create your own modules.

// Example: Using a Core Module:

// javascript
// Copy
// const fs = require("fs");

// fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully!");
//   }
// });
// Example: Creating a Custom Module:

// Create a file called greet.js:

// javascript
// Copy
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// module.exports = greet;
// Use the module in app.js:

// javascript
// Copy
// const greet = require("./greet");
// console.log(greet("Alice")); // Output: Hello, Alice!
// Chapter 1.4: NPM (Node Package Manager)
// NPM is used to install and manage third-party packages.

// Initialize a Project:

// bash
// Copy
// npm init
// This creates a package.json file to track dependencies.

// Install a Package:

// bash
// Copy
// npm install lodash
// This installs the lodash library and adds it to package.json.

// Example: Using Lodash:

// javascript
// Copy
// const _ = require("lodash");

// let numbers = [1, 2, 3, 4, 5];
// let sum = _.sum(numbers);
// console.log(sum); // Output: 15
// Assignments for Chapter 1
// Assignment 1: Create a Node.js program that writes your name to a file called name.txt.

// javascript
// Copy
// const fs = require("fs");

// fs.writeFile("name.txt", "Your Name", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully!");
//   }
// });
// Assignment 2: Create a custom module called math.js with functions to add and subtract two numbers. Use this module in app.js.

// math.js:

// javascript
// Copy
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = { add, subtract };
// app.js:

// javascript
// Copy
// const math = require("./math");

// console.log(math.add(5, 3)); // Output: 8
// console.log(math.subtract(5, 3)); // Output: 2
// Assignment 3: Install the chalk package using npm and use it to print colored text in the terminal.

// bash
// Copy
// npm install chalk
// javascript
// Copy
// const chalk = require("chalk");

// console.log(chalk.blue("Hello, Node.js!"));
// console.log(chalk.red("This is an error message!"));
// Mini Project for Chapter 1
// Project: Build a simple command-line tool that takes a user’s name as input and writes it to a file.

// Solution:

// Install the readline module (built-in) to take user input.

// Use the fs module to write the input to a file.

// javascript
// Copy
// const fs = require("fs");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name? ", (name) => {
//   fs.writeFile("userName.txt", `User's name: ${name}`, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Name saved successfully!");
//     }
//   });
//   rl.close();
// });
// Self-Learning Hint
// Practice: Experiment with Node.js by creating small programs (e.g., a file organizer, a simple calculator).

// Documentation: Refer to the Node.js Official Documentation for more details.

// Debugging: Use console.log() to inspect variables and debug your code.