const express = require("express");
const router = express.Router();
// /form/   (/form in appjs || / in the below)
router.get("/", (req, res) => {
res.send(`
<h1>WellCome to Our Website</h1>
    <div class ='myForm'>
    <form action ='/submit' method ='POST'>
    <lable for='firstName'>First_Name</lable>
    <input type='text' name='firstName' id='firstName' required/><br><br>
    <lable for='lastName'>Last_Name</lable>
    <input type='text' name='lastName' id='lastName' required/><br><br>
    <lable for='email'>Email</lable>
    <input type='email' name='email' id = 'email' required/><br><br>
    <lable for= 'password'>Password</lable>
    <input type='password' name='password' id= 'password' required/><br><br>
    <button> Submit </button>
    </form>
    </div>
`)
})
router.post("/submit", (req, res) => {
res.send("Submitted")
})

module.exports = router;