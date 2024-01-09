const express = require("express");
const cors = require("cors");
const mongoose=require('mongoose')

require("dotenv").config();
const app = express();
const PORT =  5000;
const db= require("./models/db")
const users =require("./routes/users")
const products =require("./routes/products")
const rolesRouter = require("./routes/roles");
const categoryRouter = require("./routes/category");
const cartRouter = require("./routes/cart");
app.use(cors());
app.use(express.json());
app.use("/users", users)
app.use("/products", products)
app.use("/roles", rolesRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
