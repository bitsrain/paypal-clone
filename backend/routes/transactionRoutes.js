const express = require('express');
const { getTransaction, refund } = require('../controllers/transactionController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:slug', protect, getTransaction);
router.put('/:slug/refund', protect, refund);
module.exports = router;
