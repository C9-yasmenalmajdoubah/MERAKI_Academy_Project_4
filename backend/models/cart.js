const mongoose = require("mongoose");
const cart = new mongoose.Schema({
  porduct:    [
     { type: mongoose.Schema.Types.ObjectId, ref: "Product" } ],
      //price: { type: Number },
     // quantity: { type: Number },

    
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Cart", cart);
/*
 cartItem: [
    {
      porduct: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      price: { type: Number },
      quantity: { type: Number },
    },
*/