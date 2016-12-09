var adminUsers = require('./adminUsers.js');

function Loginservice(requestBody, responseBody) {
  this.login = function() {
    console.log("Analytics Service");
    adminUsers.findOne({userId:requestBody.userName,password:requestBody.password},function(err,data){
        if (data!=null){
            
        }
        else{
        
        }
    })
    
}

this.logut = function() {
    console.log("Analytics Service");
   
    
}

this.register = function() {
    console.log("Analytics Service");
    adminUsers.findOne({userId:requestBody.userName,password:requestBody.password},function(err,data){
        if (data!=null){
            
        }
        else{
        
        }
    })
    
}
}
module.exports = Loginservice;
