const express = require("express");


const {
    updateCartByIdCart,
    getAllCartProducts,
    
} = require("../controllers/cart");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const cartRouter = express.Router();
cartRouter.get("/", authentication, getAllCartProducts);

cartRouter.put(
    "/",
    authentication,
    authorization("ADD_TO_CART"),
    updateCartByIdCart
  );
  
  module.exports = cartRouter;
  
