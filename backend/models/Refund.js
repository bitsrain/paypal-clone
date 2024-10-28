const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Refund = sequelize.define('refund', {
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
    parent_transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Transactions',
        key: 'id',
      },
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    invoice_number: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return Refund;
};