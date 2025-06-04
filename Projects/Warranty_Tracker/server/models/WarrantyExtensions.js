const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Asset = require('./AssetInventory');

const WarrantyExtension = sequelize.define('Warranty_Extensions', {
  Extension_Id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
  },  
  Asset_Id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  Serial_Number: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Purchased_Date: {
    type: DataTypes.DATE,
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
  Extend_Warranty_in_Months: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  }
}, {
  tableName: 'Warranty_Extensions',
  timestamps: true,
  indexes:[
    {fields:['History_Id']}
  ],
 
});


WarrantyExtension.belongsTo(Asset, { 
  foreignKey: 'Asset_Id',
  onUpdate: 'CASCADE'
 });

module.exports = WarrantyExtension;
