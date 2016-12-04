var InventoryModels = require('./inventoryModel.js');

function uploadService(requestBody, responseBody) {
  //Upload file
  this.uploadFile = function(data, storeId) {
    //console.log(data);
    var bulk = InventoryModels.collection.initializeOrderedBulkOp();
    var counter = 0;
    console.log('datalength' + data.length);
    for (var i = 0; i < data.length; i++) {
      //insert the value
      bulk.find({
        itemId: data[i].itemId,
        storeId: storeId
      }).upsert().update({
        "$setOnInsert": {
          itemName: data[i].itemName,
          itemCategory: data[i].itemCategory,
          itemSubCategory: data[i].itemSubCategory,
          itemBrand: data[i].itemBrand,
          itemPrice: data[i].itemPrice,
          itemImage: data[i].itemImage
        }
      });

      //update the value
      bulk.find({
        itemId: data[i].itemId,
        storeId: storeId
      }).update({
        $inc: {
          itemQuantity: Number(data[i].itemQuantity)
        },
        $set: {
          itemName: data[i].itemName,
          itemCategory: data[i].itemCategory,
          itemSubCategory: data[i].itemSubCategory,
          itemBrand: data[i].itemBrand,
          itemPrice: data[i].itemPrice,
          itemImage: data[i].itemImage
        }
      });
      counter++;
      if (counter % 5 == 0 || (i == data.length - 1)) {
        bulk.execute(function(err, result) {
          if (err)
            throw err;
          console.log('inside update or insert');
          bulk = InventoryModels.collection.initializeOrderedBulkOp();
          counter = 0;
        });
      }

    }
  }
}

module.exports = uploadService;
