const express = require('express');
const router = express.Router();


const{getJobCards,filterJobCards}=require('../controllers/jobcardlistController');


router.get('/getJobCards',getJobCards);
router.get('/filterJobCards',filterJobCards);

module.exports = router;
