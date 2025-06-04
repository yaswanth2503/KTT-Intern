const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Employee = sequelize.define('EmployeeCredentials', {
    Employee_Id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  }, {
    tableName: 'Employee_Credentials',
    timestamps: true,
    paranoid: true,
  });

  return Employee;
};
