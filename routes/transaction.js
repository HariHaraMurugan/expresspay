var express = require('express');
var router = express.Router();
var transactionService = require('../service/transactionService.js');

/* GET inventory listing. */
router.post('/insertTransaction', function(req, res, next) {
  console.log("Adding Transaction");
  new transactionService(req.body, res).enterTransactionDetails();
})


module.exports = router;
