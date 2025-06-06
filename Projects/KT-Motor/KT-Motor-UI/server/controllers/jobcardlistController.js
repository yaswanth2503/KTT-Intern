const {jobcardList} = require('../models');



const getJobCardList = async (req,res)=>{
  
     
       try{
          const jobcardlist = await jobcardList.findAll();
          res.status(201).json({
            success:true,
            result:jobcardlist
          })
            
       }

        catch(error){
        console.log("Error in getting all jobcardlist",error)
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
       
}

module.exports = {getJobCardList};