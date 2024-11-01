const { DataTypes } = require('sequelize');
const { generateTransactionSlug } = require('../utils/generators');

module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define('transaction', {
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      enum: ['USD', 'EUR', 'GBP'],
      defaultValue: 'USD',
    },
    trigger_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trigger_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refunded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  // Generate a unique slug using nanoid before saving the transaction
  Transaction.beforeCreate(async (transaction, options) => {
    transaction.slug = generateTransactionSlug();
  });

  Transaction.addScope('withRefundableUntil', {
    attributes: {
      include: [
        [
          sequelize.literal(`DATE_ADD(transaction.createdAt, INTERVAL 6 MONTH)`), // MySQL/SQL-friendly version
          'refundable_until',
        ],
      ],
    },
  });

  return Transaction;
};
