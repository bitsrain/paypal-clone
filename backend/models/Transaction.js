const { DataTypes } = require('sequelize');
const { generateTransactionSlug } = require('../utils/generators');

module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define('transaction', {
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    recipient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
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
  });

  // Generate a unique slug using nanoid before saving the transaction
  Transaction.beforeCreate(async (transaction, options) => {
    transaction.slug = generateTransactionSlug();
  });

  return Transaction;
};
