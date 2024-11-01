'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      dest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false,
        enum: ['friendly', 'service'],
        defaultValue: 'friendly',
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false,
        enum: ['USD', 'EUR', 'GBP'],
        defaultValue: 'USD',
      },
      balance_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'balances',
          key: 'id',
        },
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transfers');
  }
};
