// const multer = require('multer');
// const myConfig = require('./myConfig/myConfig');
const article = require('./controller/article');

module.exports = (app) => {
  // const upload = multer({
  //   dest: myConfig.uploadUrl
  // });

  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.get('/getArticles', article.getArticles);

  app.post('/publish', article.publish);

  app.post('/getArticleById', article.getArticleById);

  app.post('/deleteArticleById', article.deleteArticleById);
};
