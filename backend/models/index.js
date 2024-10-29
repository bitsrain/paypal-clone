// models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../database');
const UserModel = require('./User');
const BalanceModel = require('./Balance');
const InvoiceModel = require('./Invoice');
const InvoiceItemModel = require('./InvoiceItem');
const TransactionModel = require('./Transaction');
const ActivityModel = require('./Activity');
const TransferModel = require('./Transfer');
const RefundModel = require('./Refund');

const User = UserModel(sequelize, Sequelize);
const Balance = BalanceModel(sequelize, Sequelize);
const Invoice = InvoiceModel(sequelize, Sequelize);
const InvoiceItem = InvoiceItemModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const Activity = ActivityModel(sequelize, Sequelize);
const Transfer = TransferModel(sequelize, Sequelize);
const Refund = RefundModel(sequelize, Sequelize);

// User model relationships
User.hasMany(Balance, { foreignKey: 'user_id', as: 'balances', onDelete: 'CASCADE' });
User.hasMany(Invoice, { as: 'invoices', foreignKey: 'user_id' });
User.hasMany(Invoice, { as: 'received_invoices', foreignKey: 'payer_id' });

// Balance model relationships
Balance.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// Invoice model relationships
Invoice.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Invoice.belongsTo(User, { as: 'payer', foreignKey: 'payer_id' });
Invoice.hasMany(InvoiceItem, { as: 'invoice_items', foreignKey: 'invoice_id' });

// InvoiceItem model relationships
InvoiceItem.belongsTo(Invoice, { foreignKey: 'invoice_id' });

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
Transaction.hasMany(Refund, { as: 'refunds', foreignKey: 'parent_transaction_id' });

// Transactions' trigger Polymorphism, one-sided only
// Transaction.belongsTo(Invoice, { foreignKey: 'trigger_id', constraints: false });

// Refund model relationships
Refund.belongsTo(Transaction, {
  foreignKey: 'parent_transaction_id',
  as: 'parent_transaction',
});

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
  Invoice,
  InvoiceItem,
  Refund,
};
