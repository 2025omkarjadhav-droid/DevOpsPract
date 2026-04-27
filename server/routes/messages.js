const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET /api/messages - fetch all messages
router.get('/', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

// POST /api/messages - send a message
router.post('/', async (req, res) => {
  const { username, text } = req.body;
  const message = new Message({ username, text });
  await message.save();
  res.json(message);
});

module.exports = router;
