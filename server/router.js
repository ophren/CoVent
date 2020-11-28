const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// router.get('/register', userController.creteUser);

module.exports = router; 