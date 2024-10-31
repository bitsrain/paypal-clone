const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Login route
router.post('/login', async (req, res, next) => {
  passport.authenticate('login', { session: false }, async (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({ code: 'INVALID_CREDENTIALS' });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.status(500).json({ code: 'SERVER_ERROR' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return res.json({ token });
    });
  })(req, res, next);
});

// Signup route
router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      // If user creation failed, return the error message from Passport strategy
      return res.status(400).json({ message: info.message || 'Signup failed' });
    }

    // Signup was successful
    res.json({
      message: 'Signup successful',
      user
    });
  })(req, res, next);
});

router.get('/protected', protect, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

module.exports = router;