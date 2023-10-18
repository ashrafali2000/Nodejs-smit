const express = require("express");
const app = express();

// Middlerwares

//First Middlerware
app.use((req, res, next) => {
    // console.log(req.url)
    req.data = "ashraf ali"
    console.log(req)
    next()
})

//Second Middlerware
app.use((req, res, next) => {
    res.send(req.data)
})






app.listen(3000)