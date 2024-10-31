const express = require('express');
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const transferRoutes = require('./transferRoutes');
const userRoutes = require('./userRoutes');
const invoiceRoutes = require('./invoiceRoutes');
const transactionRoutes = require('./transactionRoutes');
const uploadRoutes = require('./uploadRoutes');

const router = express.Router();

// Define your routes here
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/transfers', transferRoutes);
router.use('/users', userRoutes);
router.use('/invoices', invoiceRoutes);
router.use('/transactions', transactionRoutes);
router.use('/u', uploadRoutes);

module.exports = router;
