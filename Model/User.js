const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        index:true
    },
    address:{
        type:String,
        required : true,
        unique:true,
        index:true
    },
    phone:{
        type:String
    }
}, {timestamps:true})

userSchema.index({
    name:"text",
    email:"text"
})

module.exports = mongoose.model("User", userSchema);