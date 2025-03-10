const express = require("express");
const postRoutes = require("./postRoutes");

const app = express();

app.use(express.json());
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});