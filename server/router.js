'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');
const profileController = require('./controllers/profile');
const categoryController = require('./controllers/category');
const likeController = require('./controllers/like');
const unmatchController = require('./controllers/unmatch');
const cityController = require('./controllers/city');


router.post('/register', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/login', userController.login);

router.post('/profile', profileController.createProfile);
router.get('/profile/:id', profileController.getProfile);
router.get('/profiles', profileController.getAllProfiles);

router.post('/category', categoryController.addCategory);
router.get('/categories', categoryController.getAllCategories);

router.post('/like/:direction', likeController.like);

router.post('/unmatch', unmatchController.unmatch);

router.post('/city', cityController.addCity);
router.get('/cities', cityController.getAllCities);
router.post('/city/delete', cityController.removeCityFromUser);

module.exports = router;