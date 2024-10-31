'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('users', 'date_of_birth', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.changeColumn('users', 'gender', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'phone');
    // No need to revert allowNull changes for date_of_birth and gender as specified.
  },
};
