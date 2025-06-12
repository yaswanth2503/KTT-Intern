const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    const employee = sequelize.define('employee',{
        Username :{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
       tableName:'employee_credentials',
       timestamps:true,
       index:[{
           fields:['Username'],
       }]
    });

    return employee;
}