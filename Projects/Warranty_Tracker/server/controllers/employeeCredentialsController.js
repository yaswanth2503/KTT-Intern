const {Employee} = require('../models');

const bcrypt = require('bcrypt');

const register = async (req,res)=>{
    
    

    try{  
        
        const {Employee_Id,Password} =req.body;

        console.log('Register data:', Employee_Id, Password);
        
        if (!Password || !Employee_Id) {
            return res.status(400).json({ success: false, error: "Employee_Id or Password is required" });
            }

        const empData = [{Employee_Id,Password}];
        

        const hashedPassword = await bcrypt.hash(Password,10);

        console.log(empData);

        const employee =  await Employee.create({
            Employee_Id,
            Password:hashedPassword
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