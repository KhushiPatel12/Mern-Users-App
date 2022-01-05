const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    name:String,
    age:Number,
});

const userModel = mongoose.model("user",userSchema,"user");

module.exports = userModel;