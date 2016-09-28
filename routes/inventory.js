var express = require('express');
var router = express.Router();
var inventoryService = require('../service/inventoryService.js');

/* GET inventory listing. */

router.get('/getItems', function(req, res, next) {

  new inventoryService(req.body,res).getItemList();
});

router.get('/getItemById/:itemId', function(req, res, next) {

  new inventoryService(req.body,res).getItemById(req.params.itemId);

});

module.exports = router;
