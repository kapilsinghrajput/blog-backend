const express = require("express");
const cors = require("cors");


const PORT = process.env.PORT || 8000;
const app = express();
const  connectToMongo = require("./config/db.js");
const  authRoutes = require("./routes/blogs.js");

 
//mongoose connect
connectToMongo();

// cors  
const corsOptions ={
  origin:'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.header(
  {"Access-Control-Allow-Origin":"http://localhost:3000"}
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  
  console.log("Request received:", req.method, req.url);
  
  next();
  });
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
                                                                                                                   