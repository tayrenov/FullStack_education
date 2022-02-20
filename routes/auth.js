const express = require('express'),
      router = express.Router();

const controller = require('../controllers/auth')

const errorHandler = require('../utils/errorHandler')

router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router