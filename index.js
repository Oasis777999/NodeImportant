const express = require("express");
const cors = require("cors");
const User = require("./model");
require("dotenv").config();
require("./connect");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const result = await User.find({});
  res.send(result);
});

app.get("/:id", async (req, res) => {
  const result = await User.findById(req.params.id);
  res.status(200).json({ data: result });
});

app.post("/", async (req, res) => {
  try {
    const result = new User(req.body); // create new user
    await result.save(); // save to DB
    res.status(201).json({ data: result }); // respond with success
  } catch (error) {
    res.status(400).json({ error: error.message }); // validation or save error
  }
});

app.delete("/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  res.send(result);
});

app.put("/:id", async (req, res) => {
  const result = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({ data: result });
});

app.listen(port, () => console.log("Listing on port", port));
