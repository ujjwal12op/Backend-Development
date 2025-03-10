// Awesome! Let’s move to Chapter 2: Building a Web Server with Node.js. In this chapter, you’ll learn how to create a basic web server using Node.js. This is a fundamental skill for backend development, as it allows you to handle HTTP requests and responses.

// Chapter 2: Building a Web Server with Node.js
// What is a Web Server?
// A web server is a program that listens for incoming HTTP requests and sends back responses. It’s the backbone of any web application.

// Chapter 2.1: Creating a Basic Web Server
// Node.js has a built-in http module to create a web server.

// Example:

// javascript
// Copy
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Explanation:

// http.createServer() creates a server.

// req (request) contains information about the incoming request.

// res (response) is used to send data back to the client.

// server.listen() starts the server on port 3000.

// Chapter 2.2: Handling Different Routes
// You can check the URL of the request (req.url) to handle different routes.

// Example:

// javascript
// Copy
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About Page");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Chapter 2.3: Serving HTML Files
// You can serve HTML files using the fs module to read the file and send it as a response.

// Example:

// Create an index.html file:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Home Page</title>
// </head>
// <body>
//   <h1>Welcome to the Home Page</h1>
// </body>
// </html>
// Run HTML
// Serve the file in app.js:

// javascript
// Copy
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("File not found");
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Chapter 2.4: Handling JSON Data
// You can send JSON data as a response.

// Example:

// javascript
// Copy
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/data") {
//     const data = {
//       name: "John",
//       age: 30,
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Assignments for Chapter 2
// Assignment 1: Create a web server that serves a simple HTML page with your name and a welcome message.

// javascript
// Copy
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("File not found");
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Assignment 2: Create a web server that serves JSON data at the /api/data route.

// javascript
// Copy
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/data") {
//     const data = {
//       message: "Hello, World!",
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Assignment 3: Create a web server that handles multiple routes (/, /about, /contact) and serves different HTML pages for each route.

// javascript
// Copy
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   let filePath = "";
//   if (req.url === "/") {
//     filePath = "index.html";
//   } else if (req.url === "/about") {
//     filePath = "about.html";
//   } else if (req.url === "/contact") {
//     filePath = "contact.html";
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//     return;
//   }

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Mini Project for Chapter 2
// Project: Build a simple web server that serves a static website with multiple pages (Home, About, Contact).

// Solution:

// Create the following HTML files:

// index.html:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Home</title>
// </head>
// <body>
//   <h1>Welcome to the Home Page</h1>
//   <a href="/about">About</a> | <a href="/contact">Contact</a>
// </body>
// </html>
// Run HTML
// about.html:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>About</title>
// </head>
// <body>
//   <h1>About Us</h1>
//   <a href="/">Home</a> | <a href="/contact">Contact</a>
// </body>
// </html>
// Run HTML
// contact.html:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Contact</title>
// </head>
// <body>
//   <h1>Contact Us</h1>
//   <a href="/">Home</a> | <a href="/about">About</a>
// </body>
// </html>
// Run HTML
// Serve the files using Node.js:

// javascript
// Copy
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   let filePath = "";
//   if (req.url === "/") {
//     filePath = "index.html";
//   } else if (req.url === "/about") {
//     filePath = "about.html";
//   } else if (req.url === "/contact") {
//     filePath = "contact.html";
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//     return;
//   }

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("File not found");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
// Self-Learning Hint
// Practice: Experiment with different routes and responses (e.g., serve images, CSS files).

// Documentation: Refer to the Node.js HTTP Module Documentation for more details.

// Debugging: Use console.log() to inspect requests and debug your server.