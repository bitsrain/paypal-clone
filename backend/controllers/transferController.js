const { Transfer, Balance, Activity } = require('../models');

exports.createTransfer = async (req, res) => {
  try {
    const {
      dest_id: destId,
      amount,
      currency,
      message,
    } = req.body;

    const balance = await Balance.findOne({ where: { user_id: req.user.id } });

    const transfer = await Transfer.create({
      user_id: req.user.id,
      dest_id: destId,
      amount,
      currency,
      message,
      balance_id: balance.id,
    });

    await Activity.create({
      user_id: req.user.id,
      contact_id: destId,
      actionable_id: transfer.id,
      actionable_type: 'Transfer',
      action: 'transfered',
      meta: {
        message,
        amount,
        currency,
      }
    });

    res.status(201).json({ message: 'Transfer initiated successfully', transfer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};
