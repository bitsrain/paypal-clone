const express = require('express');
const { createTransfer } = require('../controllers/transferController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createTransfer);

module.exports = router;
