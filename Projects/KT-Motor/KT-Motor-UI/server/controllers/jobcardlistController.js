const {JobCards} = require('../models');
const { Op } = require('sequelize');



const getJobCards = async (req,res)=>{
  
     
       try{
        // console.log('Filter Object:', filterObj);
          const jobcardlist = await JobCards.findAll();
          res.status(200).json({
            success:true,
            result:jobcardlist
          })
            console.log('Filtered results count:', filter.length);
       }

        catch(error){
        console.log("Error in getting all jobcard",error)
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
       
}



const filterJobCards = async (req,res)=>{

  const {transport,vehicle,number} = req.query;

  try{

    const filterObj = {};

    if(transport && transport.trim())
      filterObj.TransportName = {[Op.iLike]:`%${transport.trim()}%`};

    if(vehicle && vehicle.trim())
      filterObj.Vehicle = {[Op.iLike]:`%${vehicle.trim()}%`};

    if(number && number.trim())
      filterObj.Number = {[Op.iLike]:`%${number.trim()}%`};

    const filter = await JobCards.findAll({where: filterObj});

    res.status(200).json({
      message:'Job Cards filtered successfully',
      result:filter
      
    });
}

  catch(error){
    res.status(500).json(
      
      {
      success:false,
      message:'Error in filtering job cards',
      error:error.message
    })
    }

}

module.exports = {getJobCards,filterJobCards};