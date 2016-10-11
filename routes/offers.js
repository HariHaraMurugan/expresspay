var express = require('express');
var router = express.Router();
var offerService = require('../service/offerservice.js');

/* GET inventory listing. */

router.get('/getOffers', function(req, res, next) {
  new offerService(req.body, res).getAllInventories();
});

router.get('/getOffers/:storeId', function(req, res, next) {
  new offerService(req.body, res).getOfferByStoreId(req.params.storeId);
});

router.get('/getOffers/:storeId/:itemId', function(req, res, next) {
  new offerService(req.body, res).applyOffers(req.params.storeId, req.params.itemId);
});


module.exports = router;
