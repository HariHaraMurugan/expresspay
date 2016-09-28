function inventoryService(requestBody,responseBody){
  var dataObject=[{"id":123,"name":"Iphone","price":"50000"},{"id":223,"name":"Galaxy","price":"30000"},{"id":5344,"name":"OnePlus","price":"20000"}];

  /*Item List*/
  this.getItemList=function(){
     responseBody.json(dataObject);
  }

  /*Item BY ID*/
  this.getItemById=function(itemId){
     var itemObject={};
     for (var key in dataObject) {
       if (dataObject[key].id==itemId) {
         itemObject=dataObject[key];
       }
     }
     responseBody.json(itemObject);
  }
}

module.exports=inventoryService;
