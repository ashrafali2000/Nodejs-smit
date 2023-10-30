const express = require("express");
const router = express.Router();
const users = require("../data/user.json");
const { createUser } = require("../controller/auth");


router.get("/", (req, res) => {
  res.send(users);
});

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
