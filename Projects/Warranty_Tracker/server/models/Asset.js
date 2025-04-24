const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Employee = require('./Employee'); 

const Asset = sequelize.define('Asset', {
  Asset_Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Employee_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Serial_Number: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Category: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Brand: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Model: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Purchased_From: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Purchased_Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Warranty_Start_Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Warranty_End_Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Warranty_Extendable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  Asset_Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Asset_Images: {
    type: DataTypes.BLOB('long'),
    allowNull: false,
  },
}, {
  tableName: 'Assets',
  timestamps: false,
});


Asset.belongsTo(Employee, { foreignKey: 'Employee_Id' });

module.exports = Asset;
