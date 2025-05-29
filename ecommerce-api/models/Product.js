const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  category: String,
  price: Number,
  stock: Number,
  tags: [String],
  ratings: Number,
  reviews: [String] // could also be a subdocument array
});

module.exports = mongoose.model('Product', productSchema);
