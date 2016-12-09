var express = require("express");
var router = express.Router();
var productModifcationService=require("../service/productModificationService.js")
router.post('/updateInventory',function(req,res,next){
    new productModifcationService(req,res).updateItemInventory(req.params.itemId,req.params.storeId,req.params.itemQuantity);
});

router.post('/createNewProduct',function(req,res,next){
    console.log('inside creating product');
        console.log("parametrs are"+req.body.itemId)
         console.log("parametrs are"+req.body.itemName);
          console.log("parametrs are"+req.body.itemCategory);
           console.log("parametrs are"+req.body.itemSubCategory);
    new productModifcationService(req,res).createNewProduct(req.body);
    res.render('fileUpload');
});

module.exports = router;
