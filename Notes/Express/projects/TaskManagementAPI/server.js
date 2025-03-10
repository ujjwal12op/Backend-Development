const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// middleware 

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/",(req,res)=>{
    res.send("Task management API");
})

app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:${PORT}');
})