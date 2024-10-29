const { Op } = require('sequelize');
const { Refund, Invoice, InvoiceItem, Transaction, Activity, Balance, User } = require('../models');
const sequelize = require('../database');

exports.getTransaction = async (req, res) => {
  const transactionSlug = req.params.slug; // Retrieve the transaction ID from the request params

  try {
    const transaction = await Transaction.scope('withRefundableUntil').findOne({
      where: { slug: transactionSlug },
      include: [
        { model: User, as: 'sender', attributes: ['id', 'full_name', 'email'] }, // Transaction sender
      ],
    });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Send the transaction with all related data
    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getList = async (req, res) => {
  const { user } = req;

  try {
    const transactions = await Transaction.findAll({
      where: {
        [Op.or]: [
          { sender_id: user.id },
          { recipient_id: user.id }
        ]
      },
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'sender', attributes: ['id', 'full_name', 'email'] },
        { model: User, as: 'recipient', attributes: ['id', 'full_name', 'email'] }
      ]
    });

    res.status(200).json({ transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

exports.getFullTransaction = async (req, res) => {
  const transactionSlug = req.params.slug; // Retrieve the transaction ID from the request params

  try {
    const transaction = await Transaction.scope('withRefundableUntil').findOne({
      where: { slug: transactionSlug },
      include: [
        { model: User, as: 'sender', attributes: ['id', 'full_name', 'email', 'address_line_1', 'city', 'state'] }, // Transaction sender
        { model: User, as: 'recipient', attributes: ['id', 'full_name', 'email'] }, // Transaction sender
        { model: Refund, as: 'refunds', attributes: ['id', 'amount', 'transaction_slug', 'createdAt'] },
      ],
    });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    let parentTransaction = null;
    if (transaction.trigger_type === 'Refund') {
      const refund = await Refund.findByPk(transaction.trigger_id);
      parentTransaction = await Transaction.findByPk(refund.parent_transaction_id);
    }

    let invoice = null;
    if (transaction.trigger_type === 'Invoice') {
      invoice = await Invoice.findByPk(transaction.trigger_id, {
        include: [
          { model: InvoiceItem, as: 'invoice_items' }, // Invoice items
        ],
      });
    }

    // Send the transaction with all related data
    res.status(200).json({
      ...transaction.toJSON(),
      refund_parent: parentTransaction?.toJSON(),
      invoice: invoice?.toJSON(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.refund = async (req, res) => {
  const { slug: transactionSlug } = req.params;
  const { user } = req;
  const {
    amount,
    invoice_number,
    notes,
  } = req.body;

  const t = await sequelize.transaction();

  try {
    const transaction = await Transaction.scope('withRefundableUntil').findOne({
      where: { slug: transactionSlug },
      include: [
        { model: User, as: 'sender', attributes: ['id', 'full_name', 'email'] }, // Transaction sender
      ],
    });
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    if (transaction.recipient_id !== user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    const currentDate = new Date();
    if (currentDate > transaction.refundable_until) {
      return res.status(400).json({ error: 'Refund period has expired' });
    }

    const myBalance = await Balance.findOne({ where: { user_id: user.id } });
    const oppBalance = await Balance.findOne({ where: { user_id: transaction.sender_id }});
    if (myBalance.amount < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    myBalance.amount -= amount;
    oppBalance.amount += amount;
    await myBalance.save({ transaction: t });
    await oppBalance.save({ transaction: t });

    const refund = await Refund.create({
      sender_id: user.id,
      recipient_id: transaction.sender_id,
      parent_transaction_id: transaction.id,
      amount,
      invoice_number,
      notes,
    }, { transaction: t });
    const refundTransaction = await Transaction.create({
      sender_id: user.id,
      recipient_id: transaction.sender_id,
      amount: amount,
      trigger_id: refund.id,
      trigger_type: 'Refund',
      comment: notes,
    }, { transaction: t });

    await refund.update({ transaction_slug: refundTransaction.slug }, { transaction: t });
    await transaction.update({ refunded: true }, { transaction: t });

    await t.commit();

    res.status(200).json({
      message: 'Refunded successfully',
      refund: {
        ...refund.toJSON(),
        recipient: transaction.sender,
      },
    });
  } catch (error) {
    await t.rollback();
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}
