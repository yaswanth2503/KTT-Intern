const {WarrantyHistory} = require('../models');

const getAllHistory = async (req,res) =>{

    try{
        const history = await WarrantyHistory.findAll();

        res.status(201).json({
            success:true,
            message:'History fetched successfully',
            result:history
        });
        
    }

    catch(error){
        console.error('Error fetching history:',error);
         return res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

module.exports = {getAllHistory}