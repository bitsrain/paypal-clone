const express = require('express');
const { createInvoice, getInvoice, payInvoice } = require('../controllers/invoiceController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createInvoice);
router.get('/:id', getInvoice);
router.put('/:id/pay', protect, payInvoice)

module.exports = router;
