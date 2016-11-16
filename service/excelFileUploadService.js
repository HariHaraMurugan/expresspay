var xls =require("excel");

xls('guru.xlsx', function(err,data) {
    if(err) throw err;
    
});

var bulk = db.items.initializeUnorderedBulkOp();
bulk.find( { status: "P" } ).upsert().update(
   {
     $setOnInsert: { defaultQty: 0, inStock: true },
     $currentDate: { lastModified: true },
     $set: { status: "I", points: "0" }
   }
);
bulk.execute();

function convertToJSON(array) {
  var first = array[0].join();
  var headers = first.split(',');
  
  var jsonData = [];
  for ( var i = 1,length = array.length; i < length; i++ )
  {
   
    var myRow = array[i].join();
    var row = myRow.split(',');
    
    var data = {};
    for ( var x = 0; x < row.length; x++ )
    {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);

  }
  return jsonData;
};