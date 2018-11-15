var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressHbs = require('express-handlebars');
//Connect mongodb
const db = require('mongoose');
const dbUrl = 'mongodb://tuacoustic:Curveruler0312@ds153380.mlab.com:53380/tuacoustic';
db.connect(dbUrl, (err, res)=>{
  if(err)
  console.log('MongoDB connection failed: '+err);
  else
  console.log('MongoDB connection success: '+dbUrl);
});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
//Custom templating
app.engine('.hbs',expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  nest(error);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
	 error: {
		 message: 'Không tìm thấy trang'
	 }
  });
});

//Starting Count HBS Template
var Handlebars = require('handlebars');
Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
//End----------------------------
module.exports = app;
