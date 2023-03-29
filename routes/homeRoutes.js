const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const paintingController = require('../controllers/paintingController');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
<<<<<<< HEAD:routes/homeRoutes.js
// router.get('/', galleryController.getGalleries);
router.get('/',(req, res) => res.render('homepage'));
router.get('/gallery/:id', withAuth, galleryController.getSingleGallery);
router.get('/painting/:id', withAuth, paintingController.getSinglePainting);
=======

>>>>>>> 1812c779419edc3c414847f40647ae0cabc854c8:App/routes/homeRoutes.js

module.exports = router;