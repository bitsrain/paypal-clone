const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Balance = sequelize.define('balance', {
    user_id: {
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      enum: ['active', 'pending'],
      defaultValue: 'active',
    },
  });

  return Balance;
};
