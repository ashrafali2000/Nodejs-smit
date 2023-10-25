const express = require("express");
const router = express.Router();
const path = require("path");
const { findUser } = require("../controller/user");

const signInFile = path.join(process.cwd() ,"views","signIn.html");

router.get("/", (req, res) => {
    res.sendFile(signInFile)
})

router.post("/",  (req, res) => {
    const {email} = req.body;
    const found = findUser(email);

        if(found){
            res.send("login sucessfullyt");
        }
       res.send("user not exist")

})

module.exports = router