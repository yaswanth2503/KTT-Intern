const express = require('express');
const router = express.Router();
const WarrantyHistory = require('../models/WarrantyHistory');  // Correct model import

// Get all warranty history records
router.get('/warranty_history', async (req, res) => {
  try {
    const warrantyHistory = await WarrantyHistory.findAll();
    res.json(warrantyHistory);
  } catch (error) {
    console.error('Error fetching warranty history:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new warranty history record
router.post('/warranty_history', async (req, res) => {
  const {
    Asset_Id, Category, Serial_Number, Warranty_Start_Date, Warranty_End_Date, Extended_Warranty_Date
  } = req.body;
  
  try {
    const warrantyHistory = await WarrantyHistory.create({
      Asset_Id,
      Category,
      Serial_Number,
      Warranty_Start_Date,
      Warranty_End_Date,
      Extended_Warranty_Date
    });
    res.status(201).json(warrantyHistory);
  } catch (error) {
    console.error('Error creating warranty history:', error);
    res.status(500).json({ message: 'Error creating warranty history' });
  }
});

module.exports = router;
