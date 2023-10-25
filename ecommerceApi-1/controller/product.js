const path = require("path")
const fs = require("fs");
const product = path.join(process.cwd(),"data", "products.json");

const addProduct = (data) => {
    fs.readFile(product, "utf8", (err, userData) => {
        let myData = JSON.parse(userData);
        let {products} = myData;
        products.push({id:products.length + 1, ...data})
        let newData = JSON.stringify({products})
        fs.writeFile(product, newData, (err) => {
            if(err) {
                console.log(users);
            }
        })

    })
}
module.exports = addProduct