var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dir = path.join(__dirname, './public/');

var ServiceManager = require('./core/service/serviceManager');
ServiceManager = new ServiceManager().getInstance();


var indexRouter = require('./routes/IndexController')(dir, ServiceManager);
var router404 = require('./routes/ErrorController')(dir);
var usersRouter = require('./routes/UserController')(ServiceManager);


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('*', router404);

module.exports = app;
