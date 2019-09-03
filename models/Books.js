const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  catagory: { type: String, required: true },
  productName: { type: String, required: true },
  condition: { type: String, required: true} ,
  image:{ type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;