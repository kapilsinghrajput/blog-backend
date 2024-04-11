const mongoose = require("mongoose");

const connectToMongo = async()=>{
const res = await mongoose.connect("mongodb://localhost:27017/image-upload",{
    family:4
})
if(res){
    console.log("db connected");
}
}

module.exports = connectToMongo