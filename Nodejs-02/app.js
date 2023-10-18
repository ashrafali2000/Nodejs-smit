const express = require("express");
const app = express();
const form = require("./routes/form")
const bodyParser = require("body-parser")

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
//First Middleware
app.use((req, res, next) => { //Auth middlerware
    // console.log(req.url)
    // console.log(req)
    req.ashraf = "AnyThing"
    next()
})

//Second Middleware
// app.use((req, res, next) => {
//     res.send(req.ashraf)
// })
//Third Milddleware
app.use('/form',form)






app.listen(3000)