const mongoose = require("mongoose")

const category = new mongoose.Schema({
    title:{
        type:String
    }
})

const categoryModel = mongoose.model("categories",category);

module.exports = categoryModel