const cartModel = require("../models/cart");
const updateCartByIdCart = async (req, res) => {
  const user_Id = req.token.userId;
  //  const { product} = req.body;
  console.log( "reee",req.body.porduct);
  console.log("user_Id",user_Id)
  
  cartModel
    .findOneAndUpdate(
      { user: user_Id },
      { $push: 
      {
        porduct:req.body.porduct
      }},
      { new: true }
      
    )
    .then((items) => {
      console.log("test");
      res.status(201).json({
        success: true,
        message: `items added`,
        item: items,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getAllCartProducts = (req, res) => {
  const userId = req.token.userId;

  cartModel
    .find({user:userId})
    .populate("porduct")
    .exec()
    .then((products) => {
      if (products) {
        console.log (products)
        res.status(200).json({
          success: true,
          message: `All the products`,
          user: "hello",
          products: products,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No products Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  updateCartByIdCart,
  getAllCartProducts,
  
};
