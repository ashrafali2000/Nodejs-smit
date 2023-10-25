const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
const addProduct = require("../controller/product");

router.get("/", (req, res) => {
    res.send(products)
})

router.post("/", (req, res) => {
    const data = req.body;
   addProduct(data);
   console.log(data)
   console.log(req.body)
    res.status(200).send({status:200,message: "Product added sucessfully"});
})

module.exports = router