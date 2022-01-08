const express = require('express'),
      router = express.Router();

const controllers = require('../controllers/auth')

router.get('/login', controllers.login)
router.post('/register', controllers.register)

module.exports = router