const sequelize = require('../config/database');

const defineJobcardlist = require('./jobcardlist');

const Jobcardlist = defineJobcardlist(sequelize);

module.exports = {
    jobcardList:Jobcardlist
};