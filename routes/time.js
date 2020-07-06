const express = require('express')
const controller  = require('../controllers/get')

const router = express.Router(); 

router.get('/timestamp/:date_string?',controller.timestamp)

module.exports = router;