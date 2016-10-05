var mongodb = require('mongoose');
var Schema = mongodb.Schema;
// Define defect schema
var InventorySchema = new Schema({
    storeId: String,
    itemId: String,
    itemName: String,
    itemCategory: String,
    itemSubCategory: String,
    itemBrand: String,
    itemDescription: String,
    itemPrice: String,
    itemQuantity: String,
    itemImage: String
});

function inventoryService(requestBody, responseBody) {
    var InventoryModel = mongodb.model('inventorys', InventorySchema);

    /*Item List*/
    this.getItemList = function() {

        InventoryModel.find({}).exec(function(err, inventory) {
            responseBody.json(inventory);
        });
    }

    /*Item BY ID and store id*/
    this.getItemById = function(storeId, itemId) {
        console.log(storeId + " " + itemId);
        InventoryModel.findOne({
            storeId: storeId,
            itemId: itemId
        }, function(err, inventory) {
            if (err)
                throw err;
            // object of the user
            if (inventory == null) {
                responseBody.status(404).send("Item Not found");
            } else {
                inventory =inventory.toObject();
                inventory.totalPrice=inventory.itemPrice;
                inventory.totalQuantity=1;
                responseBody.status(200);
                responseBody.json(inventory);
            }
        });

    }
}

module.exports = inventoryService;
