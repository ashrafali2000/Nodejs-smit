const path = require("path")
const fs = require("fs");
const e = require("express");
const {uid} = require("uid/single")
const productJsonFile = path.join(process.cwd(),"data", "products.json");

const addProduct = (data) => {
    fs.readFile(productJsonFile, "utf8", (err, productData) => {
        let myData = JSON.parse(productData);
        let {products} = myData;
        const productId = uid(16)
        products.push({pId: productId , ...data})
        let newData = JSON.stringify({products})
        fs.writeFile(productJsonFile, newData, (err) => {
            if(err) {
                console.log(users);
            }
        })

    })
}

const readData = () => {
    return new Promise( (resolve, reject) => {
        fs.readFile(productJsonFile, "utf8", (err, productData) => {
            if(err){
              return  reject(err)
            }
            resolve(JSON.parse(productData.toString()))
        })

    })
    }

    const findProduct = async (productName) => {
     try{
     const  { products } = await readData()
     const newProducts = products.filter(p => p.title.toLowerCase().includes(productName))
     return newProducts;
     }catch(err){
       throw err;
     }
    }

module.exports = {addProduct, findProduct }