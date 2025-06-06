const {Employee} = require('../models');

const bcrypt = require('bcrypt');

const register = async (req,res)=>{
    
    

    try{  
        
        const {Employee_Id,Password} =req.body;

        console.log('Register data:', Employee_Id, Password);
        
        if (!Password || !Employee_Id) {
            return res.status(400).json({ success: false, error: "Employee_Id or Password is required" });
            }
      
        //  const emp_id=612;
        //  const pass='admin@123';

        //  if(Employee_Id==emp_id && Password==pass){

         const hashedPassword = await bcrypt.hash(Password,10);
          
      

        const employee =  await Employee.create({
            Employee_Id,
            Password:hashedPassword
        });

        res.status(201).json({
            success:true,
            result:employee
        });
    // }  

    // else{
    //     return res.status(400).json({
    //         success:false,
    //         message:'Employee_Id or Password is incorrect'
    //     });
    // }

    }

    catch(error){
        console.error('Error registering employee:', error);
        res.status(500).json({
            success:false,
            error:error.message
        });
    }


}

const getAllEmployees = async(req,res)=>{

    try{
        const employees = await Employee.findAll();
        res.status(201).json({
            success:true,
            message:'Employees fetched successfully',
            result:employees
        });
    }

    catch(error){
        console.error('Error fetching employees:', error);
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

module.exports = {
    register,
    getAllEmployees
}