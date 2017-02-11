var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main'); //one up in dir, controllers, then main

/* GET home page. */
// get request with URL / 
//router
//    .route('/')
//    .get(ctrlMain.index);

// or     
router.get('/', ctrlMain.home);

//testing route 
//router.get('/testing', ctrlMain.testing);

module.exports = router;
