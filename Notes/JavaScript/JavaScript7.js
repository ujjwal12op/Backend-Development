// Great! Let’s move to Chapter 6: Error Handling. This chapter will teach you how to handle errors gracefully in your JavaScript code. Proper error handling ensures your application doesn’t crash unexpectedly and provides meaningful feedback to users.

// Chapter 6: Error Handling
// Why Error Handling?
// Errors are inevitable in programming. They can occur due to:

// Invalid user input.

// Network issues.

// Bugs in the code.
// Error handling helps you manage these issues and maintain a smooth user experience.

// Chapter 6.1: Try/Catch
// Try/Catch is used to handle errors in synchronous code.

// Syntax:

// javascript
// Copy
// try {
//   // Code that might throw an error
// } catch (error) {
//   // Handle the error
// }
// Example:

// javascript
// Copy
// try {
//   let result = 10 / 0;
//   if (!isFinite(result)) {
//     throw new Error("Division by zero!");
//   }
//   console.log(result);
// } catch (error) {
//   console.log("Error:", error.message); // Output: Error: Division by zero!
// }
// Chapter 6.2: Error Object
// The Error object contains details about the error.

// Properties:

// name: The type of error (e.g., Error, TypeError).

// message: A description of the error.

// Example:

// javascript
// Copy
// try {
//   let x = y + 1; // y is not defined
// } catch (error) {
//   console.log(error.name); // Output: ReferenceError
//   console.log(error.message); // Output: y is not defined
// }
// Chapter 6.3: Finally
// The Finally block runs regardless of whether an error occurs or not.

// Syntax:

// javascript
// Copy
// try {
//   // Code that might throw an error
// } catch (error) {
//   // Handle the error
// } finally {
//   // Cleanup code
// }
// Example:

// javascript
// Copy
// try {
//   console.log("Try block");
//   throw new Error("Something went wrong!");
// } catch (error) {
//   console.log("Catch block:", error.message);
// } finally {
//   console.log("Finally block"); // Always runs
// }
// Chapter 6.4: Error Handling in Promises
// Use .catch() to handle errors in Promises.

// Example:

// javascript
// Copy
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise rejected!");
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error:", error); // Output: Error: Promise rejected!
//   });
// Chapter 6.5: Error Handling in Async/Await
// Use Try/Catch with async/await to handle errors in asynchronous code.

// Example:

// javascript
// Copy
// async function fetchData() {
//   try {
//     let response = await fetch("https://invalid-url.com");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.message); // Output: Error: Failed to fetch
//   }
// }

// fetchData();
// Assignments for Chapter 6
// Assignment 1: Write a function that divides two numbers. Handle the error if the denominator is zero.

// javascript
// Copy
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Division by zero!");
//     }
//     return a / b;
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// console.log(divide(10, 0)); // Output: Error: Division by zero!
// Assignment 2: Use async/await to fetch data from an invalid URL and handle the error.

// javascript
// Copy
// async function fetchInvalidData() {
//   try {
//     let response = await fetch("https://invalid-url.com");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.message); // Output: Error: Failed to fetch
//   }
// }

// fetchInvalidData();
// Assignment 3: Write a function that simulates a login process. Throw an error if the username or password is incorrect.

// javascript
// Copy
// function login(username, password) {
//   try {
//     if (username !== "admin" || password !== "12345") {
//       throw new Error("Invalid credentials!");
//     }
//     console.log("Login successful!");
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// login("user", "12345"); // Output: Error: Invalid credentials!
// Mini Project for Chapter 6
// Project: Build a simple form validation system.

// Validate user input (e.g., username and password).

// Display error messages if the input is invalid.

// Solution:

// html
// Copy
