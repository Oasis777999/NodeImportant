const mongoose = require("mongoose");
const DB = process.env.DB;

try{
    mongoose.connect(DB);
    console.log("Database Connected");
}
catch(error){
    console.log("Error to connect with database : ", error.message);
    
}