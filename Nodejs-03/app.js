const express = require("express")
const indexRoute = require("./routes/index")
const app = express();
const port = 3000;


// MidddleWare
app.get("/index", (req, res, nex) => {
    req.body = "hello body ";
    nex()
// res.send("Hello from middlerWare")
})

// Controller
app.use("/index", indexRoute);



app.listen(port, (req, res) => {
    console.log(`Server listen on Port ${port}`)
})