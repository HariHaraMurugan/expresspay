var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongoose');
var fileUpload = require('express-fileupload');
var cron = require('node-cron');

var routes = require('./routes/index');
var users = require('./routes/users');
var inventory = require('./routes/inventory');
var transaction = require('./routes/transaction');
var offers = require('./routes/offers');
var newarrivals = require('./routes/newarrival');
var excelUpload = require('./routes/excelUpload');
var updateProduct = require('./routes/productModification');
var analytics = require('./routes/analytics');
var reviews = require('./routes/reviews');
var stores = require('./routes/stores')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(fileUpload());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var mongurl = "mongodb://ramesh:ramesh12692@ds153667.mlab.com:53667/paydata";
var mongurl = "mongodb://localhost:27017/paydata";

//Mongo
mongodb.connect(mongurl, function(error) {
  if (error) {
    console.log("Eror Occured");
  } else {
    console.log("connected to mongo");
  }
});

// cron.schedule('*/3 * * * * *', function() {
//   console.log('running a task every minute');
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,     Content-Type, Accept");
  next();
});


app.use('/', routes);
app.use('/users', users);
app.use('/inventory', inventory);
app.use('/transaction', transaction);
app.use('/offers', offers);
app.use('/newarrivals', newarrivals);
app.use('/feedUpload', excelUpload);
app.use('/uppdateProduct', updateProduct);
app.use('/analytics', analytics);
app.use('/reviews', reviews);
app.use('/stores', stores);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
