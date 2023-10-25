const express = require("express");
const bodyParser = require("body-parser")
const indexRoute = require("./routes/index");
const product = require("./routes/products");
const signUp = require("./routes/signUp");
const user = require("./routes/user");
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json());

// MidddleWare
// app.use("/index", (req, res, nex) => {
//   req.body = "hello body ";
//   nex();
//   // res.send("Hello from middlerWare")
// });
// app.get("/products", poroducts);
// app.get("/prodcuts", (req, res, next) => {
//   res.send(poroducts)
//   next()
// })

// Controller
app.use("/", indexRoute);

// Query
// app.get("/search", (req, res) => {
//     const {q} =  req.query;
//     if(!q) {
//      res.send("Data not Found")
//     }else{
//     res.send(q)
//     }
//  })

// Products MiddleWare
app.use("/products", product);

// Users MiddleWare
app.use("/users", user);

// User created  MiddleWare
// app.use("/users", user);

// SignUp MiddleWare
app.use("/signup", signUp);

app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
