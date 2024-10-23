const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define('activity', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    actionable_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    actionable_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meta: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return Activity;
};
