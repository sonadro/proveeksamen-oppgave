// imports
const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/lag-bruker', userController.user_create);
router.post('/user-login', userController.user_login);

module.exports = router;