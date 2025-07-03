const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/Practice";

try{
    mongoose.connect(url);
    console.log("Connected to database");
}
catch(error){
    console.log("Error on connection to database");
    
}
