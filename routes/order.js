const express = require('express'),
      router = express.Router();

const controllers = require('../controllers/order')

router.get('/', controllers.getAll)
router.post('/', controllers.create)

module.exports = router