const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  catagory: { type: String, required: true },
  productName: { type: String, required: true },
  condition: String,
  date: { type: Date, default: Date.now }
});

const Products = mongoose.model("Book", productSchema);

module.exports = Products;