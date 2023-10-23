const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.send("Hello from  Controller")
})

// Dynamic route
router.get("/:categories", (req, res) => {
res.send(req.params.categories)
})

module.exports = router;