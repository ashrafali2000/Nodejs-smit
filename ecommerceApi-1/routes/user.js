const express = require("express");
const router = express.Router();
const users = require("../data/user.json");
const createUser = require("../controller/user");

router.get("/", (req, res) => {
    res.send(users)
})

router.post("/add", (req, res) => {
   createUser(req.body.email, req.body.password);
   console.log(req.body)
    res.send("SignUp sucessfully")
})
module.exports = router