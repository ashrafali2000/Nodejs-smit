const express = require("express");
const router = express.Router();
const products = require("../data/products.json")

router.get("/", (req, res) => {
    res.send(products)
})

module.exports = router