const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email:{ type: String, required: true} ,
  date: { type: Date, default: Date.now }
});

const customer = mongoose.model("Book", customerSchema);

module.exports = customer;