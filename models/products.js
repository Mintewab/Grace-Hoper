const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  catagory: { type: String, required: true },
  productName: { type: String, required: true },
  condition: { type: String, required: true} ,
  // image: { data: Buffer, type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Products = mongoose.model("Book", productsSchema);

module.exports = Products;