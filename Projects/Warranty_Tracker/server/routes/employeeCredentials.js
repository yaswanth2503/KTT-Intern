const express = require('express');
const router = express.Router();
const Employee = require('../models/EmployeeCredentials');

// Get all employees
// Here employees-table name,Employee model name

      
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json({
        
       message: 'Employee Fetched succesfully' ,
       employees:employees
    }
    );
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json(
        { message: 'Server error' }
    );
  }
});

// Create a new Employee
router.post('/employees', async (req, res) => {
  const {
    Employee_Id, Password
  } = req.body;
  
  try {
    const employee = await Employee.create({
     
      Employee_Id,
      Password
    });
    res.status(200).json({
        message: 'Employee Created Succesfully',
        employee:employee
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Error creating employee',error:error.message });
  }
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Employee = require('../models/Employee');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Authentication route
// router.post('/login', async (req, res) => {
//   const { Employee_Id, Password } = req.body;

//   try {
//     // Find employee by Employee_Id
//     const employee = await Employee.findOne({ where: { Employee_Id } });
    
//     // If employee doesn't exist
//     if (!employee) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }
    
//     // Compare passwords
//     const isMatch = await bcrypt.compare(Password, employee.Password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create and assign a JWT token
//     const token = jwt.sign(
//       { Employee_Id: employee.Employee_Id },
//       'your_jwt_secret_key', // Use a secret key to sign the JWT token
//       { expiresIn: '1h' }
//     );

//     res.json({
//       message: 'Login successful',
//       token,
//     });
//   } catch (error) {
//     console.error('Error during authentication:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

