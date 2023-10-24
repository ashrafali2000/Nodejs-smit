const express = require("express");
const router = express.Router();
const users = require("../data/user.json");
const createUser = require("../controller/user");

router.get("/", (req, res) => {
    res.send(users)
})

router.post("/add", (req, res) => {
    const {firstName, lastName, email, password} = req.body;
   createUser(firstName, lastName, email, password);
   console.log(req.body)
    res.send("SignUp sucessfully")
})
module.exports = router