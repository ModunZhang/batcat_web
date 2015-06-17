var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var aboutUs = require('./routes/aboutUs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/img/batcat_icon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/about-us', aboutUs);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  res.status(404);
  res.render('404', {layout:null});
});
// catch 500 and forward to error handler
app.use(function(err, req, res, next){
  res.status(500);
  res.render('500', {layout:null});
});

module.exports = app;
