const router = require('express').Router();
const homeController = require('../controllers/homeController');
const withAuth = require('../utils/auth');


// route to create/add a home using async/await
router.get('/', homeController.getWelcomePage);
router.get('/login', homeController.getLoginPage);
router.get('/register', homeController.getRegistrationPage);
router.get('/home', withAuth, homeController.getHomePage);

module.exports = router;