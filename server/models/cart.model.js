const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    products: { type: [String] },
  },
  { versionKey: false, timestamps: true }
);

const CartModel = mongoose.model('cart',cartSchema)

module.exports = CartModel