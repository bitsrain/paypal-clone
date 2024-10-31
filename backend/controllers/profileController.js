const { Balance } = require('../models');

exports.getProfile = (req, res) => {
  res.json(req.user);
};

exports.getBalance = async (req, res) => {
  try {
    // Retrieve the first balance object associated with the authenticated user
    const balance = await Balance.findOne({
      where: { user_id: req.user.id },
      order: [['createdAt', 'ASC']] // Sort by creation date if needed to ensure the "first" balance
    });

    if (!balance) {
      return res.status(404).json({ message: 'No balance found for this user' });
    }

    res.json(balance);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
