// models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../database');
const UserModel = require('./User');

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!')
  });

module.exports = {
  User
};