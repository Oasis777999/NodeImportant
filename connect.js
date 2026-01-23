const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Election")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));
