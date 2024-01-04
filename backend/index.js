const express = require("express");
const cors = require("cors");
const mongoose=require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;
const db= require("./models/db")
const users =require("./routes/user")
const products =require("./routes/products")
app.use(cors());
app.use(express.json());
app.use("/users", users)
app.use("/products", products)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
