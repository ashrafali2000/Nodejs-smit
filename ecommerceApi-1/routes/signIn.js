const express = require("express");
const router = express.Router();
const path = require("path");
const { findUser } = require("../controller/user");

const signInFile = path.join(process.cwd() ,"views","signIn.html");

router.get("/", (req, res) => {
    res.sendFile(signInFile)
})

router.post("/",  async (req, res) => {
    const {email} = req.body;
    const found = await findUser(email);
        if(found){
            res.send("login sucessfully");
        }
       res.send("user not exist")

})

module.exports = router