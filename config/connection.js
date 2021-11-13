
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;


sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  ports: 3306
});

module.exports = sequelize;