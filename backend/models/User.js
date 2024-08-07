const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      allowNull: false
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
      allowNull: false
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

  // define association here
  User.associate = models => {
    User.hasMany(models.balance, {
      foreignKey: 'user_id',
      as: 'balances',
    });
  };

  User.afterCreate((user, options) => {
    sequelize.models.balance.create({
      user_id: user.id,
      amount: 0,
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
