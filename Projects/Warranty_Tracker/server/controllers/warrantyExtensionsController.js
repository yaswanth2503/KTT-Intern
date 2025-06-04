const {WarrantyExtension} = require('../models');


const createExtension = async (req,res) =>{
     const {
        Asset_Id,Serial_Number, Purchased_Date, Warranty_Start_Date, Warranty_End_Date, 
        Warranty_Extend_Price, Extend_Warranty_in_Months
     } = req.body

     try{

        const asset = await WarrantyExtension.create({
            Asset_Id,
            Serial_Number,
            Purchased_Date,
            Warranty_Start_Date,
            Warranty_End_Date,
            Warranty_Extend_Price,
            Extend_Warranty_in_Months
        });

        res.status(201).json({
            success:true,
            message:'Warranty extended successfully',
            result:asset
        })


     }


      catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

module.exports={createExtension}
