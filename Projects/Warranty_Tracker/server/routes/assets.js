const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset');
// const cors = require('cors');

// Get all assets
router.get('/assets', async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new asset
router.post('/assets',async (req, res) => {
  const {
    Asset_Id, Employee_Id, Serial_Number, Category, Brand, Model, Purchased_From, 
    Purchased_Date, Warranty_Start_Date, Warranty_End_Date, Warranty_Extendable, 
    Asset_Price, Asset_Images
  } = req.body;
  
  try {
    const asset = await Asset.create({
      Asset_Id,
      Employee_Id,
      Serial_Number,
      Category,
      Brand,
      Model,
      Purchased_From,
      Purchased_Date,
      Warranty_Start_Date,
      Warranty_End_Date,
      Warranty_Extendable,
      Asset_Price,
      Asset_Images
    });
    res.status(201).json(asset);
  } catch (error) {
    console.error('Error creating asset:', error);
    res.status(500).json({ message: 'Error creating asset' });
  }
});




module.exports = router;
