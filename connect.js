const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/Practice";

try {
  mongoose.connect(DB);
  console.log("Connected to database");
} catch (error) {
    console.log("Got Error : ", error)
}
