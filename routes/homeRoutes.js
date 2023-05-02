const router = require('express').Router();
const homeController = require('../controllers/homeController');
const withAuth = require('../utils/auth');

router.get('/', homeController.getWelcomePage);
router.get('/login', homeController.getLoginPage);
router.get('/register', homeController.getRegistrationPage);
router.get('/home', withAuth, homeController.getHomePage);

const galleryController = require('../controllers/galleryController');
const paintingController = require('../controllers/paintingController');
const withAuth = require('../utils/auth');

routes/homeRoutes.js
router.get('/', galleryController.getGalleries);
router.get('/',(req, res) => res.render('homepage'));
router.get('/gallery/:id', withAuth, galleryController.getSingleGallery);
router.get('/painting/:id', withAuth, paintingController.getSinglePainting);

// App/routes/homeRoutes.js

module.exports = router;