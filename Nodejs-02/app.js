const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const path = require("path")
const form = require("./routes/signupForm")
const home = require("./routes/home")
const signinForm = require("./routes/signinForm")
const features = require("./routes/features")
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
app.use("/signup",form)
app.use("/signin",signinForm)
app.use("/",home)
app.use("/features", features)

app.listen(3000)