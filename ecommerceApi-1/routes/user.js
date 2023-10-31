const express = require("express");
const router = express.Router();
const users = require("../data/user.json");
const { createUser } = require("../controller/auth");

// get all user Api
router.get("/", (req, res) => {
  res.send(users);
});

// user Create controller
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await createUser(firstName, lastName, email, password);
    console.log(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.send("some error occur");
  }
});
module.exports = router;
