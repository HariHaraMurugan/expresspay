
var InventoryModels = require('./inventoryModel.js');
function uploadService(requestBody,responseBody){
    //Upload file
    this.uploadFile = function(data){
        console.log(data);
        var bulk = InventoryModels.collection.initializeOrderedBulkOp();
         var counter = 0;
         console.log('datalength'+data.length);
        for(var i=0;i<data.length;i++){
                   bulk.find({itemId:data[i].itemId}).upsert().update({
                       $set:{
                             storeId:data[i].storeId,
                             itemName:data[i].itemName,
                             itemCategory:data[i].itemCategory,
                             itemSubCategory:data[i].itemSubCategory,
                             itemBrand:data[i].itemBrand,
                             itemPrice:data[i].itemPrice,
                             itemQuantity:data[i].itemQuantity,
                             itemImage:data[i].itemImage
                       }
                   });
                 counter++;
        if ( counter % 5 == 0 || (i == data.length-1)){
            bulk.execute(function(err,result) {
                if(err) throw err;
                console.log('inside update or insert');
                bulk = InventoryModels.collection.initializeOrderedBulkOp();
                counter=0;
            });
    }
   
        }
        
       

        }
}

module.exports = uploadService;