var mongodb = require('mongoose');
var models = require('./userModel.js');
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
  var UserModel = models.User;
  this.enterTransactionDetails = function(phoneNumber) {
    var newTransaction = new TransactionModel(requestBody);
    newTransaction.save(function(err, newTransaction) {
      if (err) return console.error(err);
      UserModel.findOneAndUpdate({
        phoneNumber: "9940366400"
      }, {
        $push: {
          "transactionsMade": newTransaction._id
        }
      }, function(error, updatedUser) {
        console.log("Transactions Updated for User");
      });
      responseBody.status(201);
      responseBody.json(newTransaction);
    })
  }

  this.getTransactionDetails = function(phoneNumber) {
    TransactionModel.find({
      userId: phoneNumber
    }, function(error, transactionDetails) {
      if (error) {
        responseBody.status(300);
        responseBody.json(error);
      } else if (transactionDetails == null) {
        responseBody.status(404);
        responseBody.json("No transactions were found");
      } else {
        responseBody.status(200);
        responseBody.json(transactionDetails);
      }
    })
  }
}

module.exports = transactionService;
