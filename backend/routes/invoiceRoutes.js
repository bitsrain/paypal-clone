const express = require('express');
const { createInvoice } = require('../controllers/invoiceController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createInvoice);

module.exports = router;
