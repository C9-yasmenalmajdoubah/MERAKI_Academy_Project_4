const mongoose = require ("mongoose")
const product = new mongoose.Schema ({
    image_src: { type: String },
    title: { type: String },
   price: { type: Number },
   category :{type: mongoose.Schema.Types.ObjectId, ref: "Category"}
})
module.exports= mongoose.model("Product",product)