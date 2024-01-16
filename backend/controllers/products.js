const products = require("../models/products");
const productsModel = require("../models/products");


const add = (req, res) => {
  const { image_src,  title, price,category } = req.body;

  const product = new productsModel({
    image_src,
    title ,
   price,
   category
  });
console.log(req.body)
  product
 
    .save()
   
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Added Successfully`,
        user: result,
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

const getAllProducts = (req, res) => {
  
  productsModel
    .find()
    .populate("category")
    .exec()
    .then((products) => {
      console.log("pro: ",products);
      if (products.length) {
        res.status(200).json({
          success: true,
          message: `All the products`,
         
          products:products,
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
const getProductByCategoryId = (req, res) => {
let id = req.params.id;
productsModel
    .find({category:id})
    .populate()
    .exec()
    .then(( product) => {
     
      res.status(200).json({
        success: true,
        message: `The  product ${id} `,
       product: product,
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
  add,
  getAllProducts,
  getProductByCategoryId
};
