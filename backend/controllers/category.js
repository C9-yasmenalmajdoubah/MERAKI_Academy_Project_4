const categoryModel = require("../models/category");


const add = (req, res) => {
  const { typeOfCat } = req.body;
  const category = new categoryModel({
    typeOfCat
  });

  category
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

const getAllcategory = (req, res) => {
  
  categoryModel
    .find()
    
    .exec()
    .then((products) => {
      if (products.length) {
        res.status(200).json({
          success: true,
          message: `All category`,
         
          products:products,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No category Yet`,
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
  add,
  getAllcategory
};
