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
            type: article.type,
            key: article.key
          });
          res.send();
        } else {
          res.status(400).send({
            error: '上传空白的文章'
          });
        }
      } else {
        res.status(400).send({
          error: '密钥错误，无法上传'
        });
      }
    } catch (e) {
      res.status(500).send({
        error: '文章创建失败'
      });
    }
  },

  // 获取所有文章的基本信息，不包括文章的具体内容和密钥
  async getArticles (req, res) {
    try {
      const allArticles = await Article.findAll({
        attributes: { exclude: ['content', 'key'] }
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
        if (result.dataValues.key) {
          if (req.body.key) {
            if (req.body.key !== result.dataValues.key) {
              res.status(400).send({
                error: '密钥错误'
              });
            }
          } else {
            res.status(400).send({
              error: '需要访问密钥'
            });
          }
        }
        res.send(result.toJSON());
      } else {
        res.status(400).send('查无此文章');
      }
    } catch (e) {
      console.log(e);
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
