const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add Income
router.post('/income', async (req, res) => {
  const { userId, source, amount } = req.body;
  try {
    const user = await User.findById(userId);
    user.incomeSources.push({ source, amount });
    await user.save();
    res.status(201).send('Income added');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add Expense
router.post('/expense', async (req, res) => {
  const { userId, description, amount } = req.body;
  try {
    const user = await User.findById(userId);
    user.expenses.push({ description, amount });
    await user.save();
    res.status(201).send('Expense added');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
