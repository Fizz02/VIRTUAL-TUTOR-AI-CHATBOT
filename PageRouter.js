const express = require('express');
const app = express();
const path = require('path');
class PageRouter {
  constructor() {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.use('/assets', express.static('assets'));
    app.use('/modules', express.static('modules'));
    this.setupRoutes();
  }

  setupRoutes() {
    app.get('/', this.renderPage.bind(this, 'index'));
    app.get('/about', this.renderPage.bind(this, 'about'));
    app.get('/tahun-1', this.renderPage.bind(this, 'tahun1'));
    app.get('/tahun-2', this.renderPage.bind(this, 'tahun2'));
    app.get('/tahun-3', this.renderPage.bind(this, 'tahun3'));
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