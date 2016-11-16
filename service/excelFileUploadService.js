
var InventoryModels = require('./inventoryModel.js');
var mongodb = require('mongoose');
function uploadService(requestBody,responseBody){
    //Upload file
    this.uploadFile = function(data){
        console.log(data);
        var bulk = InventoryModels.collection.initializeOrderedBulkOp();
         var counter = 0;
        for(var i=0;i<data.length;i++){
            var inventory = new InventoryModels;
            inventory.storeId=data[i].storeId;
             inventory.itemId=data[i].itemId;
              inventory.itemName=data[i].itemName;
               inventory.itemCategory=data[i].itemCategory;
                inventory.itemSubCategory=data[i].itemSubCategory;
                 inventory.itemBrand=data[i].itemBrand; 
                 inventory.itemPrice=data[i].itemPrice;
                  inventory.itemQuantity=data[i].itemQuantity;
                   inventory.itemImage=data[i].itemImage;
                   
                   /*bulk.find(itemId:data[i].itemId).upsert().updateOne(
                       
                       });*/
                 counter++;
        if ( counter % 1000 == 0 )
            bulk.execute(function(err,result) {             
                bulk = Sample.collection.initializeOrderedBulkOp();
                counter=0;
            });
    }

        }
    

module.exports = uploadService;