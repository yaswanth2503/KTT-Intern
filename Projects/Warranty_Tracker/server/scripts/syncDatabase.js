const sequelize = require('../config/database');
const Employee = require('../models/EmployeeCredentials');
const Asset = require('../models/AssetInventory');
const ExtendWarranty = require('../models/WarrantyExtensions');
const WarrantyHistory = require('../models/WarrantyHistoryLogs');

(async () => {
  try {
    await sequelize.sync({ force: true });  
    console.log('Database synced successfully!');
    process.exit();
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
})();
