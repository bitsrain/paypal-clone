const express = require('express');
const authRoutes = require('./authRoutes');
const transferRoutes = require('./transferRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Define your routes here
router.use('/auth', authRoutes);
router.use('/transfers', transferRoutes);
router.use('/users', userRoutes);

module.exports = router;
