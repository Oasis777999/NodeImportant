const express = require("express");
const app = express();
const port = 5000;

const autoMiddelware = (req, res, next) => {
  const token = req.headers.authrization;

  if (!token || token !== "valid-token") {
    return res.status(401).send("Un Authourized User");
  }
  next();
};

app.get("/", autoMiddelware, (req, res) => {
  res.send("Application is working");
});

app.listen(port, () => console.log("application is running on port : ", port));
