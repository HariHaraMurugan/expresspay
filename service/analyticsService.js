var AnalyticsModel = require('./analyticsModel.js');

function AnalyticsService(requestBody, responseBody) {

  this.getAllAnalyticData = function(storeId) {
    console.log("Analytics Service");
    AnalyticsModel.findOne({
      storeId: storeId
    }, function(err, resp) {
      if (err) {
        console.log(err);
      } else {
        console.log(storeId);
        console.log("FROM ANALYTICS " + resp);
        responseBody.status(201);
        responseBody.json(resp);
      }
    });
  }
}
module.exports = AnalyticsService;
