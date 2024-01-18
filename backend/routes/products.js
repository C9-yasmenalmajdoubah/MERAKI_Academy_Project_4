const express = require("express");
const { add,getAllProducts,getProductByCategoryId,getProductById  } = require("../controllers/products");


const productsRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");


productsRouter.post("/",authentication,authorization("ADD_PRODUCTS"), add);
productsRouter.get("/" , getAllProducts);
//productsRouter.get("/:id", getProductByCategoryId);
productsRouter.get("/:id", getProductById );

module.exports = productsRouter;
