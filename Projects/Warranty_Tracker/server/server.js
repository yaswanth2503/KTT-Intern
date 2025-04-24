const express = require('express');
const { sequelize } = require('./models/index'); 
const assetRoutes = require('./routes/assets'); 
const employeeRoutes=require('./routes/employee');
const warrantyExtendRoutes=require('./routes/warrantyExtend');
const warrantyHistoryRoutes=require('./routes/warrantyHistory');

const app = express();
app.use(express.json());
app.use('/api', assetRoutes);
app.use('/api', employeeRoutes);
app.use('/api', warrantyExtendRoutes);
app.use('/api', warrantyHistoryRoutes);


sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
