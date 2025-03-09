// Chapter 4: DOM Manipulation
// What is the DOM?
// The DOM is a tree-like structure that represents the HTML of a webpage. JavaScript can manipulate the DOM to change the content, structure, or style of a webpage dynamically.

// Chapter 4.1: Accessing DOM Elements
// Selecting Elements:

// document.getElementById(): Selects an element by its id.

// javascript
// Copy
// let header = document.getElementById("header");
// document.querySelector(): Selects the first matching element using a CSS selector.

// javascript
// Copy
// let button = document.querySelector(".btn");
// document.querySelectorAll(): Selects all matching elements.

// javascript
// Copy
// let paragraphs = document.querySelectorAll("p");
// Chapter 4.2: Modifying Content
// Changing Text:

// javascript
// Copy
// let heading = document.getElementById("heading");
// heading.textContent = "Hello, World!";
// Changing HTML:

// javascript
// Copy
// let div = document.getElementById("content");
// div.innerHTML = "<p>This is a new paragraph.</p>";
// Chapter 4.3: Modifying Styles
// Changing CSS:

// javascript
// Copy
// let box = document.getElementById("box");
// box.style.backgroundColor = "blue";
// box.style.color = "white";
// Chapter 4.4: Handling Events
// Click Event:

// javascript
// Copy
// let button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   alert("Button clicked!");
// });
// Input Event:

// javascript
// Copy
// let input = document.getElementById("input");
// input.addEventListener("input", function (event) {
//   console.log("Input value:", event.target.value);
// });
// Chapter 4.5: Creating and Appending Elements
// Creating Elements:

// javascript
// Copy
// let newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph.";
// Appending Elements:

// javascript
// Copy
// let container = document.getElementById("container");
// container.appendChild(newParagraph);
// Assignments for Chapter 4
// Assignment 1: Change the text of a heading when a button is clicked.

// html
// Copy
// <h1 id="heading">Hello</h1>
// <button id="btn">Change Text</button>
// <script>
//   let button = document.getElementById("btn");
//   let heading = document.getElementById("heading");
//   button.addEventListener("click", function () {
//     heading.textContent = "Text Changed!";
//   });
// </script>
// Run HTML
// Assignment 2: Create a new list item and add it to an unordered list when a button is clicked.

// html
// Copy
// <ul id="list">
//   <li>Item 1</li>
// </ul>
// <button id="addBtn">Add Item</button>
// <script>
//   let addButton = document.getElementById("addBtn");
//   let list = document.getElementById("list");
//   addButton.addEventListener("click", function () {
//     let newItem = document.createElement("li");
//     newItem.textContent = "New Item";
//     list.appendChild(newItem);
//   });
// </script>
// Run HTML
// Assignment 3: Change the background color of a div when the mouse hovers over it.

// html
// Copy
// <div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
// <script>
//   let box = document.getElementById("box");
//   box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "blue";
//   });
//   box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "red";
//   });
// </script>
// Run HTML
// Mini Project for Chapter 4
// Project: Build a simple interactive to-do list.

// Allow users to add tasks to a list.

// Allow users to remove tasks by clicking on them.

// Solution:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>To-Do List</title>
//   <style>
//     #taskList li {
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>
//   <h1>To-Do List</h1>
//   <input type="text" id="taskInput" placeholder="Enter a task">
//   <button id="addTaskBtn">Add Task</button>
//   <ul id="taskList"></ul>

//   <script>
//     let addButton = document.getElementById("addTaskBtn");
//     let taskInput = document.getElementById("taskInput");
//     let taskList = document.getElementById("taskList");

//     addButton.addEventListener("click", function () {
//       if (taskInput.value.trim() !== "") {
//         let newTask = document.createElement("li");
//         newTask.textContent = taskInput.value;
//         newTask.addEventListener("click", function () {
//           taskList.removeChild(newTask);
//         });
//         taskList.appendChild(newTask);
//         taskInput.value = "";
//       }
//     });
//   </script>
// </body>
// </html>
// Run HTML
// Self-Learning Hint
// Practice: Experiment with DOM manipulation by creating small interactive features (e.g., a color picker, a dynamic form).

// Documentation: Refer to the MDN DOM Guide for more details.

// Debugging: Use console.log() to inspect DOM elements and their properties.