const sequelize = require('../config/database');
const Employee = require('../models/Employee');
const Asset = require('../models/Asset');
const ExtendWarranty = require('../models/WarrantyExtend');
const WarrantyHistory = require('../models/WarrantyHistory');

(async () => {
  try {
    await sequelize.sync({ force: false });  
    console.log('Database synced successfully!');
    process.exit();
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
})();
