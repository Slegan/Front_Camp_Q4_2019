const express = require('express');
const router = express.Router();
const data = require('./mockData.js');
const UrlController = require('./controllers.js');

router.get('/', UrlController.index.bind(UrlController));

router.get('/news', UrlController.getNews.bind(UrlController));
router.post('/news', UrlController.postNews.bind(UrlController));

router.get('/news/:id', UrlController.getOneNews.bind(UrlController));
router.put('/news/:id', UrlController.updateOneNews.bind(UrlController));
router.delete('/news/:id', UrlController.deleteOneNews.bind(UrlController));

module.exports = router;
