const mongoose = require("mongoose");

const blogs = new mongoose.Schema({
    title:{
        type:String
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    thumbnail:{
        type:String 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"users"
    }
})

const blogModel = mongoose.model("blogs",blogs);

module.exports = blogModel;
