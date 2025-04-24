const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Asset = require('./Asset');

const WarrantyHistory = sequelize.define('WarrantyHistory', {
  
  Asset_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Serial_Number: {
    type: DataTypes.STRING,
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
  Extended_Warranty_Date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
}, {
  tableName: 'Warranty_History',
  timestamps: false,
});


WarrantyHistory.belongsTo(Asset, { foreignKey: 'Asset_Id' });

module.exports = WarrantyHistory;
