const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const static = require("./routes/static");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use route logic from static.js
app.use("/", static);

// Port from environment or fallback
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
