const getArticles = (req, res) => {
  res.type('text').send('Get articles route');
};

const createArticle = (req, res) => {
  res.type('text').send('Post articles route');
};

const getArticleById = (req, res) => {
  res.type('text').send(`Get article by Id route: ${req.params.articleId}`);
};

const updateArticleById = (req, res) => {
  res.type('text').send(`Put article by Id route: ${req.params.articleId}`);
};

const deleteArticleById = (req, res) => {
  res.type('text').send(`Delete article by Id route: ${req.params.articleId}`);
};

module.exports = {
  getArticles,
  createArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
