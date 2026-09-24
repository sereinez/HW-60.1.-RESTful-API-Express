const express = require('express');
const articlesController = require('../controllers/articlesController');

const router = express.Router();

router.route('/')
  .get(articlesController.getArticles)
  .post(articlesController.createArticle);

router.route('/:articleId')
  .get(articlesController.getArticleById)
  .put(articlesController.updateArticleById)
  .delete(articlesController.deleteArticleById);

module.exports = router;
