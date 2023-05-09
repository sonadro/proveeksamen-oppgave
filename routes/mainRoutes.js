// imports
const { Router } = require('express');
const mainController = require('../controllers/mainController');

const router = Router();

// routes
router.get('/', mainController.home_get);
router.get('/blogger', mainController.blogger_get);
router.get('/logg-inn', mainController.login_get);
router.get('/lag-bruker', mainController.create_get);

module.exports = router;