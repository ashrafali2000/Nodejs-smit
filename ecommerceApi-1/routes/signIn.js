const express = require("express");
const router = express.Router();
const path = require("path");
const { login } = require("../controller/auth");


const signInFile = path.join(process.cwd() ,"views","signIn.html");

router.get("/", (req, res) => {
    res.sendFile(signInFile)
})

router.post("/",  async (req, res) => {
    try{
        const {email, password} = req.body;
        console.log(email, password)
        const response = await login(email, password);
        res.send(response);

    }catch(err){
      res.send(err)
    }

})

module.exports = router