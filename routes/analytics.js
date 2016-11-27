var express = require('express');
var router = express.Router();
var analyticsService = require('../service/analyticsService.js');

/* GET inventory listing. */

router.get('/getAnalytics', function(req, res, next) {
  console.log("GET Analytics");
  new analyticsService(req.body, res).getAllAnalyticData("1111");
});

module.exports = router;
