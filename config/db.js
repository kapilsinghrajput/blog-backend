const mongoose = require("mongoose");

const connectToMongo = async()=>{
const res = await mongoose.connect("mongodb+srv://kplsinghshekhawat:kapil12345@cluster0.m5zfg7x.mongodb.net/myusers",{
    family:4
})
if(res){
    console.log("db connected");
}
}

module.exports = connectToMongo