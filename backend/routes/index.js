const express = require('express');
const authRoutes = require('./auth');

const router = express.Router();

// Define your routes here
router.use('/auth', authRoutes);

module.exports = router;
