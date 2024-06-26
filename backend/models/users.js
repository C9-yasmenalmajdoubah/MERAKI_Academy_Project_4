const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs");
const user = new mongoose.Schema ({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
})
user.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
  });
module.exports= mongoose.model("User",user)