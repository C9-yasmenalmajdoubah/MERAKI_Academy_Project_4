const cartModel = require("../models/cart");
const updateCartByIdCart = async (req, res) => {
  const user_Id = req.token.userId;
  // const { product, quantity, price } = req.body;
  console.log(req.body);
  cartModel
    .findOneAndUpdate(
      { user: user_Id },
      { $push: 
      {
       // user: user_Id,
        cartItem: req.body,
      }},
      { new: true }
      
    )
    .then((items) => {
      console.log(items);
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
    .findById(userId)
    .populate("cartItem")
    .exec()
    .then((products) => {
      if (products.length) {
        res.status(200).json({
          success: true,
          message: `All the products`,
          user: user,
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
///delete from cart

const deleteItem = (req, res) => {
  
  const userId = req.token.userId;
  cartModel
    .findById(id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `items deleted`,
        result: result,
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

module.exports = {
  updateCartByIdCart,
  getAllCartProducts,
};
