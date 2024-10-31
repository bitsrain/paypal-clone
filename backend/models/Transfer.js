const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Transfer = sequelize.define('transfer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    dest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      enum: ['friendly', 'service'],
      defaultValue: 'friendly',
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
    balance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Balances',
        key: 'id',
      },
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  // Transfer.afterCreate(async (transfer, options) => {
  //   const Balance = sequelize.models.balance;
  //   const { dest_id: destId, amount } = transfer;
  //   try {
  //     const transaction = await sequelize.models.transaction.create({
  //       sender_id: transfer.user_id,
  //       recipient_id: destId,
  //       amount,
  //       currency: transfer.currency,
  //       trigger_id: transfer.id,
  //       trigger_type: 'Transfer',
  //       comment: transfer.message,
  //     }, { transaction: options.transaction });

  //     const userBalance = await Balance.findOne({ where: { user_id: transfer.user_id } });
  //     await userBalance.update({
  //       amount: userBalance.amount - amount,
  //     }, { transaction: options.transaction });

  //     const destBalance = await Balance.findOne({ where: { user_id: destId } });
  //     if (destBalance) {
  //       await destBalance.update({
  //         amount: destBalance.balance + amount,  // Add the amount to recipient balance
  //       }, { transaction: options.transaction });
  //     }

  //     await transfer.update({ transaction_id: transaction.id }, { transaction: options.transaction });
  //   } catch (error) {
  //     console.error("Error in afterCreate hook for Transfer:", error);
  //     throw error;
  //   }
  // });

  return Transfer;
};
