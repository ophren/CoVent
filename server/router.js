'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/register', userController.createUser);


module.exports = router;