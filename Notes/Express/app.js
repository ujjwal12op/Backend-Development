// // const express = require("express");
// // const app = express();
// // const port = 3000;

// // app.get("/",(req,res)=>{
// //     res.send("Hello! express");
// // })

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// //   });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("Home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("about page");
// });

// app.get("/contact",(req,res)=>{
//     res.send("Contact");
// });

// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// });


const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.post("/api/data",(req,res)=>{
    const data = req.body;
    res.json({message : "data received" ,data});
});

app.listen(port,()=>{
    console.log(`app running on server ${port}`);
});



