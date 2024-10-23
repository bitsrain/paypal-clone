const passport = require('passport');
const { User } = require('../models');

exports.protect = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, async (err, userId, info) => {
    if (err || !userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      // Fetch the full user from the database using the user id
      const fullUser = await User.findByPk(userId);
      if (!fullUser) {
        return res.status(401).json({ message: 'User not found' });
      }

      // Attach the full user object to req.user
      req.user = fullUser;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  })(req, res, next);
};
