const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define('invoice', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    invoice_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      enum: ['paid', 'pending', 'draft', 'rejected'],
      defaultValue: 'draft',
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    issue_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    paid_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ship_goods: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false,
    },
    // Virtual attribute for final status
    final_status: {
      type: DataTypes.VIRTUAL,
      get() {
        const status = this.getDataValue('status');
        const dueDate = this.getDataValue('due_date');
        const now = new Date();

        if (status === 'paid' || status === 'draft') {
          return status; // If status is 'paid' or 'draft', return it directly
        } else if (status === 'pending') {
          if (dueDate && dueDate < now) {
            return 'due'; // If due_date is defined and in the past, return 'due'
          } else if (!dueDate) {
            return 'due'; // If due_date is not defined, return 'due' (due on receipt)
          } else if (dueDate > now) {
            return 'pending'; // If due_date is in the future, keep as 'pending'
          }
        }
        return status; // Default to the current status as fallback
      }
    }
  });

  return Invoice;
};
