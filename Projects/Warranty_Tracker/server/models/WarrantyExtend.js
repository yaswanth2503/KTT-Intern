const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Asset = require('./Asset');

const ExtendWarranty = sequelize.define('ExtendWarranty', {
    Asset_Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
  Warranty_Extend_Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Extend_Warranty_Months: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Extend_Warranty',
  timestamps: false,
});


ExtendWarranty.belongsTo(Asset, { foreignKey: 'Asset_Id' });

module.exports = ExtendWarranty;
