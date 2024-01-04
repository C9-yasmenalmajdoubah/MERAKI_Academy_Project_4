const mongoose = require ("mongoose")
const product = new mongoose.Schema ({
    image_src: { type: String },
    title: { type: String },
   price: { type: String }
})
module.exports= mongoose.model("Product",product)