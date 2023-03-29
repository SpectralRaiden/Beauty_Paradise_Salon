const router = require('express').Router();

const userController = require('../../controllers/api/userController');

// /api/users/register - create a new user
router.post('/register', userController.createUser);

// /api/users/login - login a user
router.post('/login', userController.loginUser);

// /api/users/logout - logout a user
router.get('/logout', userController.logOutUser);



module.exports = router;