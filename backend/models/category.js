const mongoose = require ("mongoose")
const category = new mongoose.Schema ({
    typeOfCat: { type: String }
   
})
module.exports= mongoose.model("Category",category)