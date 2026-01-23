const express = require("express");
require("./connect");
const cors = require("cors");
const port = 5000;


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Application is working");
});

const userRoute = require("./Routes/User");

app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
