const express = require("express");
const path = require("path")
const fs = require("fs");
const router = express.Router();
const formFile = path.join(process.cwd(), "views", "signupForm.html");
// const homeFile = path.join(process.cwd(), "views", "home.html");
const storeDataFile = path.join(process.cwd(),"storeData", "data.json" );
// /form/   (/form in appjs || / in the below)
router.get("/", (req, res) => {
res.sendFile(formFile);
})

// router.get("/", (req, res) => {
// res.sendFile(homeFile);
// })

router.post("/submit", (req, res) => {
    fs.readFile(storeDataFile,"utf8",(err, datafromDatafile) => {
        const data = req.body;
        const oldData = JSON.parse(datafromDatafile);
        const newData = JSON.stringify([oldData, data])
        fs.writeFile(storeDataFile,newData,(err) => {
            if(err) {
                res.send("Data Crashed");
            }
            res.send("Data Recieved Sucessfully")
            console.log(datafromDatafile)
        })
    })
})

module.exports = router;