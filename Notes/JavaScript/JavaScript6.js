// Chapter 5: Asynchronous JavaScript
// What is Asynchronous JavaScript?
// Asynchronous JavaScript allows you to perform tasks without blocking the main thread. This is crucial for tasks like:

// Fetching data from an API.

// Reading files.

// Waiting for user input.

// Chapter 5.1: Callbacks
// A callback is a function passed as an argument to another function and executed later.

// javascript
// Copy
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data fetched!");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data); // Output after 2 seconds: Data fetched!
// });
// Chapter 5.2: Promises
// A Promise represents a value that may be available now, in the future, or never.

// States of a Promise:

// Pending: Initial state.

// Fulfilled: Operation completed successfully.

// Rejected: Operation failed.

// Creating a Promise:

// javascript
// Copy
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved!");
//   }, 2000);
// });

// promise.then((result) => {
//   console.log(result); // Output after 2 seconds: Promise resolved!
// });
// Handling Errors:

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
//     console.log(error); // Output after 2 seconds: Promise rejected!
//   });
// Chapter 5.3: Async/Await
// Async/Await is a cleaner way to work with Promises.

// Async Function: A function that returns a Promise.

// Await: Pauses the execution of an async function until the Promise is resolved.

// Example:

// javascript
// Copy
// async function fetchData() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 2000);
//   });

//   let result = await promise;
//   console.log(result); // Output after 2 seconds: Data fetched!
// }

// fetchData();
// Error Handling with Try/Catch:

// javascript
// Copy
// async function fetchData() {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error fetching data!");
//       }, 2000);
//     });

//     let result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error); // Output after 2 seconds: Error fetching data!
//   }
// }

// fetchData();
// Chapter 5.4: Fetch API
// The Fetch API is used to make HTTP requests (e.g., GET, POST).

// Example:

// javascript
// Copy
// async function fetchUserData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchUserData();
// Assignments for Chapter 5
// Assignment 1: Write a function that returns a Promise. The Promise should resolve after 3 seconds with the message "Hello, World!".

// javascript
// Copy
// function delayedMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello, World!");
//     }, 3000);
//   });
// }

// delayedMessage().then((message) => {
//   console.log(message); // Output after 3 seconds: Hello, World!
// });
// Assignment 2: Use async/await to fetch data from an API (e.g., https://jsonplaceholder.typicode.com/posts) and log the result.

// javascript
// Copy
// async function fetchPosts() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchPosts();
// Assignment 3: Write a function that simulates a login process. It should return a Promise that resolves if the username is "admin" and the password is "12345", otherwise rejects.

// javascript
// Copy
// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     if (username === "admin" && password === "12345") {
//       resolve("Login successful!");
//     } else {
//       reject("Invalid credentials!");
//     }
//   });
// }

// login("admin", "12345")
//   .then((message) => {
//     console.log(message); // Output: Login successful!
//   })
//   .catch((error) => {
//     console.log(error); // Output: Invalid credentials!
//   });
// Mini Project for Chapter 5
// Project: Build a simple weather app.

// Use the Fetch API to get weather data from a public API (e.g., OpenWeatherMap).

// Display the weather information (temperature, weather condition) on the webpage.

// Solution:

// html
// Copy
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Weather App</title>
// </head>
// <body>
//   <h1>Weather App</h1>
//   <input type="text" id="cityInput" placeholder="Enter city name">
//   <button id="getWeatherBtn">Get Weather</button>
//   <div id="weatherInfo"></div>

//   <script>
//     let getWeatherBtn = document.getElementById("getWeatherBtn");
//     let cityInput = document.getElementById("cityInput");
//     let weatherInfo = document.getElementById("weatherInfo");

//     getWeatherBtn.addEventListener("click", async () => {
//       let city = cityInput.value;
//       if (city.trim() === "") {
//         alert("Please enter a city name.");
//         return;
//       }

//       try {
//         let response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
//         );
//         let data = await response.json();
//         weatherInfo.innerHTML = `
//           <h2>${data.name}</h2>
//           <p>Temperature: ${data.main.temp}°C</p>
//           <p>Weather: ${data.weather[0].description}</p>
//         `;
//       } catch (error) {
//         weatherInfo.innerHTML = "Error fetching weather data.";
//       }
//     });
//   </script>
// </body>
// </html>