'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('invoices', 'attachments', {
      type: Sequelize.JSON,
      allowNull: true,
      defaultValue: [],
      comment: 'Array of attachment objects with name and url properties'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('invoices', 'attachments');
  }
};
