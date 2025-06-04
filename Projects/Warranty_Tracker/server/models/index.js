const sequelize = require('../config/database');

// Import model definitions
const defineEmployee = require('./EmployeeCredentials');
const defineAsset = require('./AssetInventory');
const defineWarrantyExtension = require('./WarrantyExtensions');
const defineWarrantyHistory = require('./WarrantyHistoryLogs');

// Initialize models
const Employee = defineEmployee(sequelize);
const Asset = defineAsset(sequelize);
const WarrantyExtension = defineWarrantyExtension(sequelize);
const WarrantyHistory = defineWarrantyHistory(sequelize);

// Define associations
Asset.belongsTo(Employee, { foreignKey: 'Employee_Id', onUpdate: 'CASCADE' });
WarrantyExtension.belongsTo(Asset, { foreignKey: 'Asset_Id', onUpdate: 'CASCADE' });
WarrantyHistory.belongsTo(WarrantyExtension, { foreignKey: 'Extension_Id', onUpdate: 'CASCADE' });

// Export all models and sequelize
module.exports = {
  sequelize,
  Employee,
  Asset,
  WarrantyExtension,
  WarrantyHistory
};
