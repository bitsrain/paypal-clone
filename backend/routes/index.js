const express = require('express');
const authRoutes = require('./authRoutes');
const transferRoutes = require('./transferRoutes');

const router = express.Router();

// Define your routes here
router.use('/auth', authRoutes);
router.use('/transfers', transferRoutes);

module.exports = router;
