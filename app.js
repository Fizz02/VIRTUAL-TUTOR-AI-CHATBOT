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

app.get('/algebra-calculator', function(req,res){
  res.render('pages/algebra-calculator');
})

app.listen(8080);
console.log('Server is listening on port 8080');