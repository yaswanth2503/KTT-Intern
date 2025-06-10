// const express = require('express');
// const cors = require('cors');
// const path = require('path'); 
// const { sequelize } = require('./models/index'); 

// const apiRoutes = require('./routes/index');
// // const authRoutes = require('./routes/auth');

// const app = express();

// // Middlewares 
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // API Routes
// app.use('/api', apiRoutes);




// app.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname,'..','client','public','login.html'));
// })

// app.use(express.static(path.join(__dirname, '..', 'client', 'public')));


// sequelize.sync()
//   .then(() => {
//     console.log('Database synced');
//     app.listen(3000, () => {
//       console.log('Server running on http://localhost:3000');
//     });
//   })
//   .catch((err) => {
//     console.error('Error syncing database:', err);
//   });
  


// server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { sequelize, Asset } = require('./models');
const apiRoutes = require('./routes/index');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

// Multer for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
app.use('/api', apiRoutes);

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'login.html'));
});

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });