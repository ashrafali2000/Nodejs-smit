const express = require("express");
const path = require("path")
const router = express.Router();
const formFile = path.join(process.cwd(), "views", "form.html");
// /form/   (/form in appjs || / in the below)
router.get("/", (req, res) => {
res.sendFile(formFile);
})
router.post("/submit", (req, res) => {
res.send(req.body)
console.log(req.body)
})

module.exports = router;