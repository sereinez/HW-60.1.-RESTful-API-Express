const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);

router.route('/:userId')
  .get(usersController.getUserById)
  .put(usersController.updateUserById)
  .delete(usersController.deleteUserById);

module.exports = router;
