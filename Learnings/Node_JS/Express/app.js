// const express = require('express');
// const app = express();
// const PORT = 3000;


// app.get('/', (req, res) => {
//   res.send('Welcome to the homepage!');
// });

// app.get('/about', (req, res) => {
//   res.send('This is the about page.');
// });



// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json()); // for parsing JSON body

// app.get('/',(req,res)=>{
//     res.send("Welcome to the homepage!")
// })


// app.get('/sample', (req, res) => {
//   res.send('Getting all sample');
// });


// app.post('/sample', (req, res) => {
//   res.send('Creating a new user');
// });


// app.put('/sample/1', (req, res) => {
//   res.send('Updating user with ID 1');
// });


// app.delete('/sample/1', (req, res) => {
//   res.send('Deleting user with ID 1');
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = 3000;


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/sample', (req, res) => {
//   res.send('Fetching all sample...');
// });

// t
// app.post('/sample', (req, res) => {
//   console.log('POST data:', req.body);
//   res.send(`User ${req.body.username} created`);
// });

// app.put('/sample/:id', (req, res) => {
//   console.log('PUT data:', req.body);
//   res.send(`User with ID ${req.params.id} updated`);
// });


// app.delete('/sample/:id', (req, res) => {
//   res.send(`User with ID ${req.params.id} deleted`);
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });



// Middleware example

// const express = require('express');
// const app = express();

//  Middleware 1: Logs Request Information
// app.use((req, res, next) => {
//   console.log(`Method: ${req.method}, URL: ${req.url}`);
//   next(); // Passing control to the next middleware
// });

// Middleware 2: Responding to the Request
// app.use((req, res, next) => {
//   res.send('Hello, World!');
// });


// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


// Error handling in express
// const express = require('express');
// const app = express();


// app.get('/', (req, res, next) => {
//   const error = new Error('Something went wrong!');
//   next(error);
// });


// app.use((err, req, res, next) => {
//   console.error(err.stack);  
//   res.status(500).send('Something went wrong on the server!');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });

const { Client } = require('pg');

const con = new Client({
    host: "localhost",
    user: "postgres",  
    port: 5432,
    password: "root",  
    database: "dummy"  
});

con.connect()
.then(() => console.log("Connected to the Database"))
.catch(err => console.error("Connection error", err.stack));

con.query('SELECT * FROM samle',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
        
    }
    con.end()
})
