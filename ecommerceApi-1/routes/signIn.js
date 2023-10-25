const express = require("express");
const router = express.Router();
const path = require("path");
const { findUser } = require("../controller/user");

const signInFile = path.join(process.cwd() ,"views","signIn.html");

router.get("/", (req, res) => {
    res.sendFile(signInFile)
})

router.post("/user",  (req, res) => {
    const {email} = req.body;
    const found = findUser(email);
    console.log(email)
    if(!found){
        res.send("user not exist");
    }
//    console.log(req.body)
   res.send("login sucessfully")
})

module.exports = router