'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');
const profileController = require('./controllers/profile');
const categoryController = require('./controllers/category');
const likeController = require('./controllers/like');
const matchController = require('./controllers/match');


router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/register', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/login', userController.login);

router.post('/profile', profileController.createProfile);
router.get('/profile/:id', profileController.getProfile);

router.post('/category', categoryController.addCategory);
router.get('/categories', categoryController.getAllCategories);

router.post('/like/:direction', likeController.like);

router.post('/match', matchController.addMatch);


module.exports = router;