const express = require("express");
const path = require("path");
const signinFile = path.join(process.cwd(), "views","signinForm.html");
const router = express.Router();
router.get("/", (req, res) => {
    res.sendFile(signinFile);
})

module.exports = router;

