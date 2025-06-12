const express = require('express');
const router = express.Router();


const{getJobCards,filterJobCards}=require('../controllers/jobcards');
const{login} = require('../controllers/employeeCredentials');


router.get('/getJobCards',getJobCards);
router.get('/filterJobCards',filterJobCards);


router.post('/login',login);

module.exports = router;
