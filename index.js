const express = require("express");
const cors = require("cors");


const PORT = process.env.PORT || 8000;
const app = express();
require("./config/db.js");
const  authRoutes = require("./routes/blogs.js");

 
//mongoose connect

// cors  
app.use(cors(origin="https://dull-cyan-dhole-slip.cyclic.app/")); 

app.use(express.json())
app.use(express.static("public/upload"))
app.get("/",(req,res)=>{
  res.send("port listen")
})

// api routes

app.use("/api/v1",authRoutes)


app.listen(PORT,()=>{
    console.log("port listing");
})
                                                                                                                   