const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Get user by ID
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.send(user) : res.status(404).send('User not found');
});

module.exports = router;
