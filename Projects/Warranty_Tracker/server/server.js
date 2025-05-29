const express = require('express');
const cors = require('cors');
const path = require('path'); 

const { sequelize } = require('./models/index'); 
const assetRoutes = require('./routes/assetInventory'); 
const employeeRoutes=require('./routes/employeeCredentials');  
const warrantyExtensionRoutes=require('./routes/warrantyExtensions');
const warrantyHistoryRoutes=require('./routes/warrantyHistoryLogs');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', assetRoutes);
app.use('/api', employeeRoutes);
app.use('/api', warrantyExtensionRoutes);
app.use('/api', warrantyHistoryRoutes);
app.use('/api', authRoutes); 



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
  