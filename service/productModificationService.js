var InventoryModels = require('./inventoryModel.js');
function productModificationService(requestBody,responseBody){
    
    this.updateItemInventory = function(itemId,storeId,inventory){
        InventoryModels.findOneAndUpdate({itemId: itemId,storeId:storeId},{
             itemQuantity: inventory
            }, function(err, inventory) {
          if (err) throw err;
          if(inventory!=null){
            responseBody.status(200);
            responseBody.json(inventory);
          }
            });
        
    }
    this.createNewProduct = function(reqParams){
        InventoryModels.findOneAndUpdate({itemId: reqParams.itemId,storeId:reqParams.storeId},{upsert:true},
        {
                             itemName:reqParams.itemName,
                             itemCategory:reqParams.itemCategory,
                             itemSubCategory:reqParams.itemSubCategory,
                             itemBrand:reqParams.itemBrand,
                             itemPrice:reqParams.itemPrice,
                             itemQuantity:reqParams.itemQuantity,
                             itemImage:reqParams.itemImage  
        },function(err,product){
        if (err) throw err;
        if(product!=null){
            responseBody.status(200);
            responseBody.json(product);
        }
        });

}

}
module.exports = productModificationService;