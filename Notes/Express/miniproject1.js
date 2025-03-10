// Fantastic! Let’s move to Chapter 3: Introduction to Express.js. Express.js is a popular web framework for Node.js that simplifies building web applications and APIs. It provides a robust set of features for routing, middleware, and handling HTTP requests and responses.

// Chapter 3: Introduction to Express.js
// What is Express.js?
// Express.js is a minimal and flexible Node.js web application framework.

// It simplifies tasks like routing, handling requests, and integrating middleware.

// It’s widely used for building web servers and APIs.

// Chapter 3.1: Setting Up Express.js
// Install Express:

// Create a new project folder and initialize it:

// bash
// Copy
// npm init -y
// Install Express:

// bash
// Copy
// npm install express
// Create a Basic Express Server:

// Create a file called app.js:

// javascript
// Copy
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, Express!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Run the server:

// bash
// Copy
// node app.js
// Visit http://localhost:3000 in your browser to see "Hello, Express!".

// Chapter 3.2: Routing in Express
// Express makes it easy to define routes for different HTTP methods (GET, POST, etc.).

// Example:

// javascript
// Copy
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });
// Chapter 3.3: Serving Static Files
// Use the express.static middleware to serve static files (e.g., HTML, CSS, images).

// Example:

// Create a folder called public and add an index.html file:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Static File</title>
// </head>
// <body>
//   <h1>Welcome to the Static File Page</h1>
// </body>
// </html>
// Run HTML
// Serve the public folder in app.js:

// javascript
// Copy
// app.use(express.static("public"));
// Visit http://localhost:3000 to see the index.html file.

// Chapter 3.4: Handling JSON Data
// Express automatically parses JSON data in requests.

// Example:

// javascript
// Copy
// app.use(express.json()); // Middleware to parse JSON

// app.post("/api/data", (req, res) => {
//   const data = req.body;
//   res.json({ message: "Data received!", data });
// });
// Chapter 3.5: Middleware
// Middleware functions have access to the request (req), response (res), and the next function in the request-response cycle.

// Example:

// javascript
// Copy
// const logger = (req, res, next) => {
//   console.log(`Request URL: ${req.url}`);
//   next();
// };

// app.use(logger); // Use the middleware
// Assignments for Chapter 3
// Assignment 1: Create an Express server with routes for /, /about, and /contact.

// javascript
// Copy
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Assignment 2: Serve static files from a folder called public.

// javascript
// Copy
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("public"));

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Assignment 3: Create a POST route /api/data that accepts JSON data and returns it in the response.

// javascript
// Copy
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.post("/api/data", (req, res) => {
//   const data = req.body;
//   res.json({ message: "Data received!", data });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Mini Project for Chapter 3
// Project: Build a simple API with Express.js.

// Create routes for:

// GET /api/users: Returns a list of users.

// POST /api/users: Accepts user data and adds it to the list.

// Use an array to store user data.

// Solution:

// javascript
// Copy
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Alice" },
// ];

// // GET /api/users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // POST /api/users
// app.post("/api/users", (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.json({ message: "User added!", user: newUser });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Self-Learning Hint
// Practice: Experiment with Express by building small APIs (e.g., a to-do list, a blog system).

// Documentation: Refer to the Express.js Official Documentation for more details.

// Debugging: Use console.log() to inspect requests and debug your application.