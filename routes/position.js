const express = require('express'),
      router = express.Router();

const controllers = require('../controllers/position')

router.get('/:category', controllers.getByCategoryId)
router.post('/', controllers.create)
router.patch('/:id', controllers.remove)
router.delete('/:id', controllers.update)

module.exports = router