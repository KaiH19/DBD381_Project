const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  _id: String,
  amount: Number,
  method: String,
  status: String,
  userId: String,
  paidAt: Date
});

module.exports = mongoose.model('Payment', paymentSchema);
