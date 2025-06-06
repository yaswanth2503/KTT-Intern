
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'kt_motor',
  'postgres',
  'root',
  {
    host: 'localhost',     
    dialect: 'postgres', 
    logging: false         
  }
);

module.exports = sequelize;

