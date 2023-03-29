const router = require('express').Router();
const homeController = require('../controllers/homeController');
// const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/', homeController.getWelcomePage);

module.exports = router;