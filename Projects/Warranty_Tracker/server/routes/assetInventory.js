const express = require('express');
const router = express.Router();
const Asset = require('../models/AssetInventory');
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
    res.status(500).json({ message: 'Error creating asset', error: error.message });
  }
});



router.put('/assets/:Asset_Id', async (req, res) => {
  const { Asset_Id } = req.params;
  const {
    Employee_Id, Serial_Number, Category, Brand, Model, Purchased_From, 
    Purchased_Date, Warranty_Start_Date, Warranty_End_Date, Warranty_Extendable, 
    Asset_Price, Asset_Images
  } = req.body;

  try {
    const asset = await Asset.findByPk(Asset_Id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    // Update fields
    await asset.update({
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

    res.json(asset);
  } catch (error) {
    console.error('Error updating asset:', error);
    res.status(500).json({ message: 'Error updating asset', error: error.message });
  }
});

// Delete an asset by Asset_Id
router.delete('/assets/:Asset_Id', async (req, res) => {
  const { Asset_Id } = req.params;

  try {
    const asset = await Asset.findByPk(Asset_Id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }

    await asset.destroy();
    res.json({ message: 'Asset deleted successfully' });
  } catch (error) {
    console.error('Error deleting asset:', error);
    res.status(500).json({ message: 'Error deleting asset', error: error.message });
  }
});



module.exports = router;
