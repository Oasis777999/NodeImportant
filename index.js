const express = require("express");
const cors = require("cors");
const User = require("./user");
const app = express();
const port = 5000;

require("./connect");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    let result = await User.find({});
    res.json({ data: result });
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/", async (req, res) => {
  let { name } = req.body;
  let result = new User({ name });
  result = await result.save();
  res.send("Registerd : "+ name);
});

app.delete("/delete/:id", async(req, res)=>{
    let id = req.params.id
    await User.findByIdAndDelete(id);
})

app.listen(port, () => console.log("Application is running on port : ", port));
