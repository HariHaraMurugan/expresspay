var express = require("express");
var router = express.router();
var uploadService = require("../service/excelFileUploadService.js");

router.post('/upload', function(req, res, next) {
  console.log("Adding New Arrivals");
  new uploadService(req.files, res).uploadFile();
})

