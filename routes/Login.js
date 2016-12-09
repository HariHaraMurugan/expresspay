var express = require('express');
var router = express.Router();
var loginservice = require('../service/LoginService.js');

/* GET inventory listing. */

router.get('/login', function(req, res, next) {
  console.log("GET Analytics");
  new loginservice(req.body, res).login();
});

router.get('/logout', function(req, res, next) {
  console.log("GET Analytics");
  new loginservice(req.body, res).logut();
});

router.get('/register', function(req, res, next) {
  console.log("GET Analytics");
  new loginservice(req.body, res).register();
});

module.exports = router;
