var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var staticPages = require('./routes/staticPages');
var errorhandler = require('errorhandler')
var app = express();

// view engine setup
var hbs = exphbs.create({
  defaultLayout: 'static',
  partialsDir: 'views/partials/',
  helpers: {
    cdnPrefix: function() {
      return process.env.TAONINGJS_CDNURL;
    }
  }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', staticPages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('pages/404');
});

// error handlers
app.use(errorhandler());

module.exports = app;
