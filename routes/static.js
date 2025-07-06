const express = require("express");
const router = express.Router();

// Render homepage view
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;



