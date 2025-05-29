const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _id: String,
  userId: String,
  productId: String,
  quantity: Number,
  price: Number,
  status: String,
  placedAt: Date
});

module.exports = mongoose.model('Order', orderSchema);
