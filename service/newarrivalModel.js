var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var ArrivalSchema = new Schema({
  storeId: String,
  itemId: String,
  itemAddedOn: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongodb.model('newarrivals', ArrivalSchema);
