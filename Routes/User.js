const router = require("express").Router();
const User = require("../Model/User");

router.get("/search", async (req, res) => {
  try {
    const search = req.query.q || "";
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    if (!search) {
      return res.status(4000).json({ message: "Search query required" });
    }

    let query = {};

    if (/^\d+$/.test(search)) {
      query = {
        phone: { $regex: search },
      };
    } else {
      query = {
        $text: { $search: search },
      };
    }

    console.log(query);

    const users = await User.find(query)
      .skip(skip)
      .limit(limit)
      .select("name email phone");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
