const express = require("express");
const { add,getAllProducts } = require("../controllers/products");


const productsRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");


productsRouter.post("/",authentication,authorization("ADD_PRODUCTS"), add);
productsRouter.get("/",authentication,authorization("GET_ALL_PRODUCTS"), getAllProducts);


module.exports = productsRouter;
