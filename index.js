const express = require("express");
const cors = require("cors");
const User = require("./User");
const app = express();
const port = 5000;

require("./connect");

app.use(express.json());
app.use(cors())

// app.get("/", (req, res) => {
//   res.send("Application is Working");
// });

app.get("/", async (req, res) => {
  let result = await User.find({});
  res.send(result);
});

app.post("/", async (req, res) => {
  let result = new User(req.body);
  await result.save();
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  let result = await User.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});

app.put("/:id", async (req, res) => {
  let result = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(result);
});

app.patch("/:id", async (req, res) => {
  let result = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(result);
});

app.listen(port, () => console.log("Application is working"));
