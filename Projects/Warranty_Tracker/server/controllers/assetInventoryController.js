const {Asset} = require('../models');

const createAsset = async (req,res)=>{
    console.log(req.body);

    const {
         Asset_Id, Employee_Id, Serial_Number, Category, Brand, Model, Purchased_From, 
         Purchased_Date, Warranty_Start_Date, Warranty_End_Date, Warranty_Extendable, 
         Asset_Price, Asset_Images
          } = req.body

    try{
        const assets = await Asset.create({
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

        res.status(201).json({
            success:true,
            result:assets
        });

    }

    catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

const getAllAssets = async (req,res)=>{
     

       try{
          const assets = await Asset.findAll();
          res.status(200).json({
            success:true,
            result:assets
          })
            
       }

        catch(error){
        console.log("Error in getting all assets",error)
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
       
}

module.exports={
    createAsset,
    getAllAssets
}
   
  