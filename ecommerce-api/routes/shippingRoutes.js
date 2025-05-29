const express = require('express');
const Shipping = require('../models/Shipping');
const router = express.Router();

// Track shipment
router.get('/:id', async (req, res) => {
  const ship = await Shipping.findById(req.params.id);
  ship ? res.send(ship) : res.status(404).send('Shipping info not found');
});

module.exports = router;
