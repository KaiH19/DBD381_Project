const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  _id: String,
  orderId: String,
  address: String,
  trackingNumber: String
});

module.exports = mongoose.model('Shipping', shippingSchema);
