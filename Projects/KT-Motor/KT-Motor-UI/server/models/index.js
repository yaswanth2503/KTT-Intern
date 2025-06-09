const sequelize = require('../config/database');

const defineJobcards = require('./jobcardlist');

const JobCards = defineJobcards(sequelize);

module.exports = {
    JobCards:JobCards
};