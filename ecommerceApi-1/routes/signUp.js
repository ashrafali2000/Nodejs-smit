const express = require("express");
const router = express.Router();
const path = require("path");

const signUpFile = path.join(process.cwd() ,"views","signUp.html");

router.get("/", (req, res) => {
    res.sendFile(signUpFile)
})

module.exports = router