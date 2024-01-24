const express = require('express');
const app = express();
const path = require('path');
class PageRouter {
  constructor() {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.use('/assets', express.static('assets'));
    app.use('/controllers', express.static('controllers'));
    app.use('/models', express.static('models'));
    this.setupRoutes();
  }

  setupRoutes() {
    app.get('/', this.renderPage.bind(this, 'index'));
    app.get('/about', this.renderPage.bind(this, 'about'));
    app.get('/tahun-1', this.renderPage.bind(this, 'tahun1'));
    app.get('/tahun-2', this.renderPage.bind(this, 'tahun2'));
    app.get('/tahun-3', this.renderPage.bind(this, 'tahun3'));
    app.get('/calc', this.renderPage.bind(this, 'calculator'));
    app.get('/general', this.renderPage.bind(this, 'algebra_calculator'));
    app.get('/number', this.renderPage.bind(this, 'nomborbulat'));
    app.get('/coord', this.renderPage.bind(this, 'coordinate'));
    app.get('/manage', this.renderPage.bind(this, 'data_management'));
    app.get('/measurement', this.renderPage.bind(this, 'measurement'));
    app.get('/money', this.renderPage.bind(this, 'money'));
    app.get('/space', this.renderPage.bind(this, 'space'));
    app.get('/time', this.renderPage.bind(this, 'time'));
  }

  renderPage(pageName, req, res) {
    res.render(`pages/${pageName}`);
  }

  startServer(port) {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

const pageRouter = new PageRouter();
pageRouter.startServer(8080);