var InventoryModel = require('./inventoryModel.js');
var OffersModel = require('./offerModel.js');

function offerservice(requestBody, responseBody) {
  this.getAllInventories = function() {
    var modifedData = [];
    InventoryModel.find({}).exec(function(err, inventories) {
      if (err)
        throw err;
      responseBody.status(200);
      responseBody.json(inventories);
    });
  }

  this.getOfferByStoreId = function(storeId) {
    OffersModel.find({
      storeId: storeId
    }).exec(function(err, offers) {
      if (err)
        throw err;
      responseBody.status(200);
      responseBody.json(offers);
    });
  }

  this.applyOffers = function(storeId, itemId) {
    OffersModel.findOne({
      storeId: storeId,
      itemId: itemId
    }, function(err, offerDetails) {
      if (err)
        throw err;
      responseBody.status(200);
      responseBody.json(offerDetails);
    });
  }

}
module.exports = offerservice;
