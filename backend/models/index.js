// models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../database');
const UserModel = require('./User');
const BalanceModel = require('./Balance');
const InvoiceModel = require('./Invoice');
const TransactionModel = require('./Transaction');
const ActivityModel = require('./Activity');
const TransferModel = require('./Transfer');

const User = UserModel(sequelize, Sequelize);
const Balance = BalanceModel(sequelize, Sequelize);
const Invoice = InvoiceModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const Activity = ActivityModel(sequelize, Sequelize);
const Transfer = TransferModel(sequelize, Sequelize);

// Balance model relationships
User.hasMany(Balance, {
  foreignKey: 'user_id',
  as: 'balances',
  onDelete: 'CASCADE',
});
Balance.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// Invoice model relationships
User.hasMany(Invoice, {
  foreignKey: 'user_id',
  as: 'invoices',
  onDelete: 'CASCADE',
});
Invoice.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'sender',
});

// Transaction model relationships
User.hasMany(Transaction, {
  foreignKey: 'sender_id',
  as: 'sent_transactions',
});
User.hasMany(Transaction, {
  foreignKey: 'recipient_id',
  as: 'received_transactions',
});
Transaction.belongsTo(User, {
  foreignKey: 'sender_id',
  as: 'sender',
});
Transaction.belongsTo(User, {
  foreignKey: 'recipient_id',
  as: 'recipient',
});

// Transactions' trigger Polymorphism, one-sided only
// Transaction.belongsTo(Invoice, { foreignKey: 'trigger_id', constraints: false });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!')
  });

module.exports = {
  User,
  Balance,
  Transaction,
  Activity,
  Transfer,
};
