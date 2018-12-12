const { Article } = require('./../models');
const config = require('../config/config');

/**
 * @author Chen
 * @version 2018-12-11
 */
module.exports = {
  async publish (req, res) {
    try {
      if (_auth(req.body.key)) {
        const article = req.body.article;
        if (article) {
          await Article.create({
            title: article.title,
            description: article.description,
            author: article.author,
            content: article.content,
            likes: 0,
            type: article.type
          });
          res.send();
        } else {
          res.status(400).send({
            error: '上传空白的文章'
          });
        }
      } else {
        res.status(400).send({
          error: '密钥错误，无法上传w'
        });
      }
    } catch (e) {
      res.status(500).send({
        error: '文章创建失败'
      });
    }
  },

  // 获取所有文章的基本信息，不包括文章的具体内容
  async getArticles (req, res) {
    try {
      const allArticles = await Article.findAll({
        // attributes: { exclude: ['content'] }
      });
      const result = [];
      for (let article of allArticles) {
        result.push(article.toJSON());
      }
      res.send(result);
    } catch (e) {
      res.status(400).send({
      });
    }
  },

  // 获取特定一篇文章
  async getArticleById (req, res) {
    try {
      const result = await Article.findOne({
        where: {
          id: req.body.id
        }
      });
      if (result) {
        res.send(result.toJSON());
      } else {
        res.status(400).send('查无此文章');
      }
    } catch (e) {
      res.status(500).send({
        error: '服务器出错咯'
      });
    }
  },

  // 删除文章
  async deleteArticleById (req, res) {
    try {
      if (_auth(req.body.key)) {
        await Article.destroy({
          where: {
            id: req.body.id
          }
        });
        res.send();
      } else {
        res.status(400).send({
          error: '密钥错误，无法删除'
        });
      }
    } catch (e) {
      res.status(500).send({
        error: '服务器出错咯'
      });
    }
  }
};

function _auth (key) {
  if (!key) {
    return false;
  }
  return key.toString() === config.uploadKey;
}
