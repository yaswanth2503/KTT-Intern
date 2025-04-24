const sequelize = require('../config/database');
const Employee = require('./Employee');
const Asset = require('./Asset');
const ExtendWarranty = require('./WarrantyExtend');
const WarrantyHistory = require('./WarrantyHistory');

// Associations
Asset.belongsTo(Employee, { foreignKey: 'Employee_Id' });
ExtendWarranty.belongsTo(Asset, { foreignKey: 'Asset_Id' });
WarrantyHistory.belongsTo(Asset, { foreignKey: 'Asset_Id' });

module.exports = {
  sequelize,
  Employee,
  Asset,
  ExtendWarranty,
  WarrantyHistory
};
