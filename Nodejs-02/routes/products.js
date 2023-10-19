const express = require("express");
const path = require("path")
const router = express.Router();
const productFile = path.join(process.cwd(), "views", "products.html");

router.get("/", (req, res) => {
res.sendFile(productFile);
})

module.exports = router