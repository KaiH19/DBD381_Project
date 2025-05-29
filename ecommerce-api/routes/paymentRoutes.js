const express = require('express');
const Payment = require('../models/Payment');
const router = express.Router();

// Record a payment
router.post('/', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).send(payment);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
