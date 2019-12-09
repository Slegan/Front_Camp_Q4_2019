const News = require('./newsModel.js');

class NewsService {
  getAll() {
    console.log('try to get');
    // console.log(News.find(), 'try to get');
    
    const responce = News.find({"author": "Fred Imbert"}, (error, result) => {
      if(error) {
        return console.log(`Error has occurred: ${error}`);
      }
      console.log(result);
    });
    
    return responce;
  }
}

module.exports = new NewsService();
