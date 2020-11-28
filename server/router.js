'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');

// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });

router.post('/register', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.post('/login', userController.login);


module.exports = router;