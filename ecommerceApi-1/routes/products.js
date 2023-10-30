const express = require("express");
const router = express.Router();
const path = require("path")
const allProducts = require("../data/products.json");
const {addProduct, findProduct} = require("../model/product");

const productFile = path.join(process.cwd() ,"views","newProduct.html");

router.get("/", (req, res) => {
    res.send(allProducts)
})


router.get("/add", (req, res) => {
    res.sendFile(productFile)
})

// Dynamic routing
router.get("/:p", async (req, res) => {
    const searchProduct = req.params.p;
 const dynamicProduct = await findProduct(searchProduct)
   res.send(dynamicProduct)  
})

router.post("/", (req, res) => {
    const {title,description,price,discountPercentage,rating,stock,brands,category,thumbnail,images} = req.body;
   addProduct({title,description,price,discountPercentage,rating,stock,brands,category,thumbnail,images:[images]});

   console.log(req.body)
    res.status(200).send({status:200,message: "Product added sucessfully"});
})

module.exports = router