const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({error: false, message: "All supplier end point"})
})
module.exports = router;