// imports
const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.post('/lag-bruker', userController.user_create);

module.exports = router;