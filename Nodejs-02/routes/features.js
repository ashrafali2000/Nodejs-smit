const express = require("express");
const path = require("path")
const router = express.Router();
const featuresFile = path.join(process.cwd(), "views", "features.html");

router.get("/", (req, res) => {
res.sendFile(featuresFile);
})

module.exports = router