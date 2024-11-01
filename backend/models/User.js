const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address_line_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_line_2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: true
    }
  });

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => { 
        throw new Error(); 
      });
  });

  User.afterCreate((user, options) => {
    sequelize.models.balance.create({
      user_id: user.id,
      amount: 5000,
      currency: 'USD',
      status: 'active',
    });
  });

  User.prototype.comparePassword = function(password) {
    // Your code here
    return bcrypt.compare(password, this.password);
  };

  return User;
};
