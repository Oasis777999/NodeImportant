const express = require("express");
const sendMail = require("./sendMail");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Application is working");
});

app.get("/mail", sendMail);

app.listen(port, () => console.log("application is running on port : ", port));
