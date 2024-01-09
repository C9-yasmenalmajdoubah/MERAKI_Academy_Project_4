const mongoose = require ("mongoose")

const order = new mongoose.Schema ({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: { type: String},
    paymentMethod: ["Visa","Cash","paypal"]
})

module.exports= mongoose.model("Order",order)