const express = require('express');
const { getProfile, getBalance } = require('../controllers/profileController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', protect, getProfile);
router.get('/balance', protect, getBalance);

module.exports = router;
