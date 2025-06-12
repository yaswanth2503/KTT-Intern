const sequelize = require('../config/database');

const defineJobcards = require('./jobcards');
const defineEmployee = require('./employeeCredentials');

const jobcards = defineJobcards(sequelize);
const employee = defineEmployee(sequelize);

module.exports = {
    jobcards,
    employee
};  