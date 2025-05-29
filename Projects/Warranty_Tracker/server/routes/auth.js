const express = require('express');
const router = express.Router();
const Employee = require('../models/EmployeeCredentials');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Authentication route - Handle login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Find employee by Employee_Id (using username from form)
    const employee = await Employee.findOne({ where: { Employee_Id: username } });
    
    // If employee doesn't exist
    if (!employee) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Compare passwords (you may need to implement proper hashing later)
    // For now, direct comparison since your model doesn't seem to store hashed passwords
    if (password !== employee.Password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and assign a JWT token
    const token = jwt.sign(
      { Employee_Id: employee.Employee_Id },
      'your_jwt_secret_key', // Use a secret key to sign the JWT token
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      employee: {
        Employee_Id: employee.Employee_Id
      },
      token
    });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;