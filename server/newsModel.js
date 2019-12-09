const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const NewsSchema = mongoose.Schema({
//   source: {
//     type: mongoose.Schema.ObjectId,
//   },
//   author: {
//     type: String,
//   },
//   title: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   url: {
//     type: String,
//   },
//   urlToImage: {
//     type: String,
//   },
//   publishedAt: {
//     type: String,
//   },
//   content: {
//     type: String,
//   },
// });

const NewsSchema = new Schema ({
  source: String,
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String
});
// , { collection: 'news' }
// const NewsSchema = new Schema ({
//   source: [{ id: String, name: String}],
//   author: String,
//   title: String,
//   description: String,
//   url: String,
//   urlToImage: String,
//   publishedAt: String,
//   content: String
// })

const News = mongoose.model('news2', NewsSchema, 'news2');

module.exports = News;
