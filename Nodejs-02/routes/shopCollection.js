const express = require("express");
const path = require("path")
const router = express.Router();
const homeFile = path.join(process.cwd(), "views", "shopCollection.html");

router.get("/", (req, res) => {
res.sendFile(homeFile);
})

module.exports = router