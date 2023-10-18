const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const form = require("./routes/form")
const path = require("path")
const cssFileForm = path.join(process.cwd(),"public")

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(cssFileForm))
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
app.use("/form",form)

app.listen(3000)