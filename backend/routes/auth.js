const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

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
router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

router.get('/profile', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const user = await User.findByPk(req.user);
  return res.json(user);
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

module.exports = router;