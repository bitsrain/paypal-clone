const { Transfer, Balance, Activity, Transaction } = require('../models');
const sequelize = require('../database');

exports.createTransfer = async (req, res) => {
  const t = await sequelize.transaction(); // Start a transaction

  try {
    const {
      dest_id: destId,
      amount,
      currency,
      message,
    } = req.body;

    const myBalance = await Balance.findOne({ where: { user_id: req.user.id } });
    if (myBalance.amount < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    const transfer = await Transfer.create({
      user_id: req.user.id,
      dest_id: destId,
      amount,
      currency,
      message,
      balance_id: myBalance.id,
    }, { transaction: t });

    const transaction = await Transaction.create({
      sender_id: transfer.user_id,
      recipient_id: destId,
      amount,
      currency: currency,
      trigger_id: transfer.id,
      trigger_type: 'Transfer',
      comment: message,
    }, { transaction: t });

    const destBalance = await Balance.findOne({ where: { user_id: destId } });
    myBalance.amount -= amount;
    destBalance.amount = +destBalance.amount + amount; // decimal type issue
    await myBalance.save({ transaction: t });
    await destBalance.save({ transaction: t });

    await transfer.update({ transaction_id: transaction.id }, { transaction: t });

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
    }, { transaction: t });

    // Commit the transaction
    await t.commit();

    res.status(201).json({ message: 'Transfer initiated successfully', transfer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};
