var mongodb = require('mongoose');
var Schema = mongodb.Schema;
// Define defect schema
var TransactionSchema = new Schema({
  storeId: String,
  userId: String,
  amountPayed: String,
  modeOfPayment: String,
  bankName: String,
  transactionDate: {
    type: Date,
    default: Date.now
  },
  itemsPurchased: [Schema.Types.Mixed]
});

function transactionService(requestBody, responseBody) {
  var TransactionModel = mongodb.model('transactions', TransactionSchema);

  this.enterTransactionDetails = function() {
    var newTransaction = new TransactionModel(requestBody);
    newTransaction.save(function(err, newTransaction) {
      if (err) return console.error(err);
      responseBody.status(201);
      responseBody.json(newTransaction);
    })
  }
}

module.exports = transactionService;
