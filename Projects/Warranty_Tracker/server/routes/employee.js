const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

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
    res.status(500).json({ message: 'Error creating employee' });
  }
});

module.exports = router;
