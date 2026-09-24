const express = require('express');
const rootController = require('../controllers/rootController');
const usersRouter = require('./users');
const articlesRouter = require('./articles');

const router = express.Router();

router.get('/', rootController.getRoot);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

module.exports = router;
