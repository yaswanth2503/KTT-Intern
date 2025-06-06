const express = require('express');
const router = express.Router();


const{getJobCardList}=require('../controllers/jobcardlistController');

router.get('/getJobCardList',getJobCardList);

module.exports = router;
