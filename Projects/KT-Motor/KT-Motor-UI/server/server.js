const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/database');
const apiRoutes = require('./routes/index');

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'public', 'login.html'));
});


app.use('/api', apiRoutes);


sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
