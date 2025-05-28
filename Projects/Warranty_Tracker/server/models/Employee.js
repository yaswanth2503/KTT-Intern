const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
 
  Employee_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Employees',
 
});

module.exports = Employee;


