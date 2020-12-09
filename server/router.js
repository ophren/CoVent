'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');
const profileController = require('./controllers/profile');
const categoryController = require('./controllers/category');
const likeController = require('./controllers/like');
const unmatchController = require('./controllers/unmatch');
const cityController = require('./controllers/city');
const swipeController = require('./controllers/swipe');
const messageController = require('./controllers/message');

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

router.post('/swipe', swipeController.addSwipe);

router.post('/message', messageController.createMessage);
router.get('/messages', messageController.getAllMessages);
router.get('/messages/:profileId/:receivedId', messageController.getConversation);

// router.get('/messages/:profileId', messageController.getMsgsByProfileId);
// router.get('/messages/received/:receivedId', messageController.getMsgsByReceivedId);
// router.get('/messages/sent/:sentId', messageController.getMsgsBySentId);

module.exports = router;