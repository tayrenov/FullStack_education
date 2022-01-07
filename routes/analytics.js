const express = require('express'),
      router = express.Router();

const controllers = require('../controllers/analytics')

router.get('/overview', controllers.overview)
router.get('/analytics', controllers.analytics)

module.exports = router