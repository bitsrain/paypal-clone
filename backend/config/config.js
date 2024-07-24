// npx sequelize-cli db:migrate --config config/config.js
// npx sequelize-cli db:seed:all --config config/config.js
// npx sequelize-cli db:seed:undo:all --config config/config.js

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "paypal",
    "host": "127.0.0.1",
    // "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
