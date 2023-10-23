const express = require("express");
const indexRoute = require("./routes/index");
const app = express();
const port = 3000;

// MidddleWare
app.use("/index", (req, res, nex) => {
  req.body = "hello body ";
  nex();
  // res.send("Hello from middlerWare")
});

// Controller
app.use("/index", indexRoute);

// Query
app.get("/search", (req, res) => {
    const {q} =  req.query;
    if(!q) {
     res.send("Data not Found")
    }else{
    res.send(q)
    }
 })

app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
