const express = require('express');
const { getTransaction, refund, getFullTransaction } = require('../controllers/transactionController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:slug', protect, getTransaction);
router.get('/:slug/full', protect, getFullTransaction)
router.put('/:slug/refund', protect, refund);

module.exports = router;
