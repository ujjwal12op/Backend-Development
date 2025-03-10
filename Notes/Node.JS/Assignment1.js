const fs = require("fs");
fs.writeFile("name.txt","ujjwal",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File created successfully!");
    }
})

