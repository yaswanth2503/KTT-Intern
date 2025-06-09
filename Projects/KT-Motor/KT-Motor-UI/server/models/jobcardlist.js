
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  const JobCards = sequelize.define('JobCards', {
    Number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ClientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TransportName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vehicle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vehicle_Inward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JcTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Vehicle_In_Time: {
        type: DataTypes.DATE,
        allowNull: false
      },
       Vehicle_Out_Time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Closing_Time: {
        type: DataTypes.DATE,
        allowNull: false
      }
  }, {
    tableName: 'JobCards',
    timestamps: true 
  });

  return JobCards;
};