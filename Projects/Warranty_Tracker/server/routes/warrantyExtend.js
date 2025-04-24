const express = require('express');
const router = express.Router();
const WarrantyExtend = require('../models/WarrantyExtend');  // Correct model import

// Get all extended warranties
router.get('/Extend_Warranty', async (req, res) => {
  try {
   
    const extend_warranty = await WarrantyExtend.findAll();
    res.json(extend_warranty);
  } catch (error) {
    console.error('Error fetching extended warranties:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/Extend_Warranty', async (req, res) => {
  const {
   Asset_Id, Category,Serial_Number, Purchased_Date, Warranty_Start_Date, Warranty_End_Date, 
   Warranty_Extend_Price, Extend_Warranty_Months
  } = req.body;
  
  try {
  
    const extend_warranty = await WarrantyExtend.create({
     
      Asset_Id,
      Category,
      Serial_Number,
      Purchased_Date,
      Warranty_Start_Date,
      Warranty_End_Date,
      Warranty_Extend_Price,
      Extend_Warranty_Months,
      
    });
    res.status(201).json(extend_warranty);
  } catch (error) {
    console.error('Error creating extended warranty:', error);
    res.status(500).json({ message: 'Error creating extended warranty' });
  }
});

module.exports = router;


