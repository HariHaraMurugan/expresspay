var offerModel =require("./offerModel.js");
var InventoryModel = require("./inventoryModel.js");
function discountUpdateService(requestBody, resp){
    this.updateDiscountsbyCategoryAndSubCategory = function(){
        var finalQuery={};
        console.log(JSON.stringify(requestBody));
        if(requestBody.category!=null){
        var query = {itemCategory:requestBody.category};
        if(requestBody.subcategory!=null){
            query = {itemCategory:requestBody.category,itemSuubCategory:requestBody.subcategory};
        }
        if(requestBody.itemId!=null){
            query = {itemCategory:requestBody.category,itemSuubCategory:requestBody.subcategory,itemId:requestBody.itemId};
        }
        offerModel.update(query,
        {$set:{discountType:'discounts',discountRate:requestBody.discountRate,storeId:'1111',userId:null}},
        {upsert:true},function(err,data){
           if(err)throw err;
           /*if(data!=null){
               resp.render('offersAndPromotion');
               resp.status(201);
               resp.send(data);
               
           }*/
        });
        }
    }
    this.updateDiscountsbyItemId = function(){
    InventoryModel.find({itemId:requestBody.itemId,storeId:'1111'},function(err,inventory){
        console.log(JSON.stringify(inventory));
        offerModel.update({itemId:requestBody.itemId},
        {
            $set:
            { discountType:'discounts',
              discountRate:requestBody.discountRate,
              itemCategory:inventory[0].itemCategory,
              itemSuubCategory:inventory[0].itemSubCategory,
              storeId:'1111',
              userId:null
            }},
        {upsert:true},function(err,data){
         if(err)throw err;
         /*if(data!=null){
             resp.render('offersAndPromotion');
              resp.status(201);
               resp.send(data);
               
           }*/
});
});
    
        
    }
}

module.exports =discountUpdateService;