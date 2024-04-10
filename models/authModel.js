const mongoose = require("mongoose");

const auth = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const authModel = mongoose.model("users",auth);

module.exports = authModel;
