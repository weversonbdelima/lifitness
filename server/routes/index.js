var express = require('express');
var router = express.Router();

var views = require('../controllers/controllers');

/* GET home page. */
//router.get('/', views.massCorporalIndex);



router.get('/bmi', views.bodyMassIndex);

module.exports = router;
