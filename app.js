var express = require('express');
var app = express();
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

app.use('/assets', express.static('assets'));
// index page
app.get('/', function(req, res) {

  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/general', function(req,res){
  res.render('pages/algebra_calculator');
});

app.get('/coord', function(req,res){
  res.render('pages/coordinate');
});

app.get('/manage', function(req,res){
  res.render('pages/data_management');
});

app.get('/measurement', function(req,res){
  res.render('pages/measurement');
});

app.get('/money', function(req,res){
  res.render('pages/money');
});

app.get('/space', function(req,res){
  res.render('pages/space');
});

app.get('/time', function(req,res){
  res.render('pages/time');
});

app.listen(8080);
console.log('Server is listening on port 8080');