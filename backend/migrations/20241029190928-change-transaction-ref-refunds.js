'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('refunds', 'transaction_id');
    await queryInterface.addColumn('refunds', 'transaction_slug', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('refunds', 'transaction_slug');
    await queryInterface.addColumn('refunds', 'transaction_id', {
      type: Sequelize.INTEGER, // Adjust this type based on your original type for transaction_id
      allowNull: true, // Adjust this based on the original `transaction_id` settings
    });
  },
};
