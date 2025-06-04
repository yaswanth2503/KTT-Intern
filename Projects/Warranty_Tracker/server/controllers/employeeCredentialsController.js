const {Employee} = require('../models/EmployeeCredentials');

const register = async (req,res)=>{
    
    const {Employee_Id,Password} =req.body;

    try{  
        
        const employee =  await Employee.create({
            Employee_Id,Password
        });

        res.status(201).json({
            success:true,
            result:employee
        });

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