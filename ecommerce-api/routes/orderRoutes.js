const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get orders by user
router.get('/user/:userId', async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.send(orders);
});

module.exports = router;
