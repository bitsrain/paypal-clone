const { Op } = require('sequelize');
const { User } = require('../models'); // Adjust the path to your User model

exports.searchUsers = async (req, res) => {
  const { query } = req.query;

  if (!query || query.trim() === '') {
    return res.status(400).json({ error: 'Search query cannot be empty' });
  }

  try {
    // Search users by full_name or email, excluding the current user
    const users = await User.findAll({
      where: {
        [Op.and]: [
          { id: { [Op.ne]: req.user.id } }, // Exclude the current user
          {
            [Op.or]: [
              { full_name: { [Op.like]: `%${query}%` } }, // MySQL uses LIKE for case-insensitive search
              { email: { [Op.like]: `%${query}%` } } // MySQL LIKE is case-insensitive
            ]
          }
        ]
      },
      attributes: ['id', 'full_name', 'email'] // Limit returned attributes to id, full_name, and email
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
