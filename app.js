var express = require('express');
var app = express();
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file
app.use('/assets', express.static('assets'));

class PageRouter {
  constructor(app) {
    this.app = app;
    this.setupRoutes();
  }

  setupRoutes() {
    this.app.get('/', this.renderPage.bind(this, 'index'));
    this.app.get('/about', this.renderPage.bind(this, 'about'));
    this.app.get('/calc', this.renderPage.bind(this, 'calculator'));
    this.app.get('/general', this.renderPage.bind(this, 'algebra_calculator'));
    this.app.get('/number', this.renderPage.bind(this, 'nomborbulat'));
    this.app.get('/coord', this.renderPage.bind(this, 'coordinate'));
    this.app.get('/manage', this.renderPage.bind(this, 'data_management'));
    this.app.get('/measurement', this.renderPage.bind(this, 'measurement'));
    this.app.get('/money', this.renderPage.bind(this, 'money'));
    this.app.get('/space', this.renderPage.bind(this, 'space'));
    this.app.get('/time', this.renderPage.bind(this, 'time'));
  }

  renderPage(pageName, req, res) {
    res.render(`pages/${pageName}`);
  }
}

const pageRouter = new PageRouter(app);

app.listen(8080);
console.log('Server is listening on port 8080');