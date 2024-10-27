const express = require('express');
const authRoutes = require('./authRoutes');
const transferRoutes = require('./transferRoutes');
const userRoutes = require('./userRoutes');
const invoiceRoutes = require('./invoiceRoutes');

const router = express.Router();

// Define your routes here
router.use('/auth', authRoutes);
router.use('/transfers', transferRoutes);
router.use('/users', userRoutes);
router.use('/invoices', invoiceRoutes);

module.exports = router;
