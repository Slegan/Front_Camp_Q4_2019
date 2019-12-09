const data = require('./mockData.js');
const NewsService = require('./service.js');

class UrlController {
  index(req, res, next) {
    try {
      res.json(data);
      console.log('index page data was submit');
    } catch (error) {
      next(error);
    }
  }

  async getNews(req, res, next) {
    try {
      console.log(NewsService, 'before news page data was submit');
      const allNews = await NewsService.getAll();
      console.log(allNews, 'lalalala page data was submit');
      res.json(allNews);
      console.log('news page data was submit');
    } catch (error) {
      next(error);
    }
  }

  getOneNews(req, res, next) {
    try {
      res.json(data);
      console.log('selected news topic was submit');
    } catch (error) {
      next(error);
    }
  }

  postNews(req, res, next) {
    try {
      res.json(data);
      console.log('new topics was added');
    } catch (error) {
      next(error);
    }
  }

  updateOneNews(req, res, next) {
    try {
      res.json(data);
      console.log('selected topic was updated');
    } catch (error) {
      next(error);
    }
  }

  deleteOneNews(req, res, next) {
    try {
      res.json(data);
      console.log('selected data was delete');
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UrlController();
