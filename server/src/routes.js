// const multer = require('multer');
// const config = require('./config/config');
const article = require('./controller/article');

module.exports = (app) => {
  // const upload = multer({
  //   dest: config.uploadUrl
  // });

  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.get('/getArticles', article.getArticles);

  app.post('/publish', article.publish);

  app.post('/getArticleById', article.getArticleById);

  app.post('/deleteArticleById', article.deleteArticleById);
};
