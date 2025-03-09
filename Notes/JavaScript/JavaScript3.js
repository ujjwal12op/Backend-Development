// Chapter 3: Arrays and Objects
// What is an Array?
// An array is a list of values. Each value is called an element, and each element has an index (position) starting from 0.

// Chapter 3.1: Creating and Accessing Arrays
// Creating an Array:

// javascript
// Copy
// let fruits = ["Apple", "Banana", "Orange"];
// Accessing Elements:

// javascript
// Copy
// console.log(fruits[0]); // Output: Apple
// console.log(fruits[1]); // Output: Banana
// Chapter 3.2: Array Methods
// Push: Add an element to the end.

// javascript
// Copy
// fruits.push("Mango");
// console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]
// Pop: Remove the last element.

// javascript
// Copy
// fruits.pop();
// console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
// Length: Get the number of elements.

// javascript
// Copy
// console.log(fruits.length); // Output: 3
// Chapter 3.3: Looping Through Arrays
// For Loop:

// javascript
// Copy
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// For-Of Loop (ES6):

// javascript
// Copy
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// What is an Object?
// An object is a collection of key-value pairs. Keys are strings, and values can be any data type (numbers, strings, arrays, even other objects).

// Chapter 3.4: Creating and Accessing Objects
// Creating an Object:

// javascript
// Copy
// let person = {
//   name: "John",
//   age: 25,
//   isStudent: true,
// };
// Accessing Properties:

// javascript
// Copy
// console.log(person.name); // Output: John
// console.log(person["age"]); // Output: 25
// Chapter 3.5: Modifying Objects
// Adding Properties:

// javascript
// Copy
// person.city = "New York";
// console.log(person); // Output: { name: "John", age: 25, isStudent: true, city: "New York" }
// Deleting Properties:

// javascript
// Copy
// delete person.isStudent;
// console.log(person); // Output: { name: "John", age: 25, city: "New York" }
// Chapter 3.6: Looping Through Objects
// For-In Loop:

// javascript
// Copy
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
// Assignments for Chapter 3
// Assignment 1: Create an array of numbers and write a function to find the largest number in the array.

// javascript
// Copy
// function findLargest(arr) {
//   let largest = arr[0];
//   for (let num of arr) {
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// }
// console.log(findLargest([3, 7, 2, 9, 5])); // Output: 9
// Assignment 2: Create an object representing a book with properties like title, author, and year. Add a method to the object that prints the book’s details.

// javascript
// Copy
// let book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   year: 1925,
//   printDetails: function() {
//     console.log(`${this.title} by ${this.author}, published in ${this.year}`);
//   },
// };
// book.printDetails(); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925
// Assignment 3: Write a function that takes an array of objects (each representing a person with name and age) and returns the names of people who are 18 or older.

// javascript
// Copy
// function getAdults(people) {
//   let adults = [];
//   for (let person of people) {
//     if (person.age >= 18) {
//       adults.push(person.name);
//     }
//   }
//   return adults;
// }
// let people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 15 },
// ];
// console.log(getAdults(people)); // Output: ["Bob"]
// Mini Project for Chapter 3
// Project: Build a simple to-do list.

// Use an array to store tasks.

// Write functions to:

// Add a task.

// Remove a task.

// Display all tasks.

// Solution:

// javascript
// Copy
// let tasks = [];

// function addTask(task) {
//   tasks.push(task);
//   console.log(`Task added: ${task}`);
// }

// function removeTask(task) {
//   let index = tasks.indexOf(task);
//   if (index !== -1) {
//     tasks.splice(index, 1);
//     console.log(`Task removed: ${task}`);
//   } else {
//     console.log(`Task not found: ${task}`);
//   }
// }

// function displayTasks() {
//   if (tasks.length === 0) {
//     console.log("No tasks to display.");
//   } else {
//     console.log("Tasks:");
//     for (let task of tasks) {
//       console.log(`- ${task}`);
//     }
//   }
// }

// addTask("Learn JavaScript");
// addTask("Build a project");
// displayTasks(); // Output: Tasks: - Learn JavaScript, - Build a project
// removeTask("Learn JavaScript");
// displayTasks(); // Output: Tasks: - Build a project
// Self-Learning Hint
// Practice: Experiment with arrays and objects by creating small programs (e.g., a shopping cart, a student database).

// Documentation: Refer to the MDN Arrays Guide and MDN Objects Guide for more details.

// Debugging: Use console.log() to inspect arrays and objects at different stages of your code.