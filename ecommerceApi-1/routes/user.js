const express = require("express");
const router = express.Router();
const users = require("../data/user.json")

router.get("/", (req, res) => {
    res.send(products)
})

const createUser = (email, password) => {
    let user = JSON.parse(users);
    user.push({email, password});
    return true;
}

router.post("/add", (req, res) => {
    createUser(req.body.email, req.body.password)
    res.send("SignUp sucessfully")
})
module.exports = router