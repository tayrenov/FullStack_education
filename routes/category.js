const express = require('express'),
      passport = require('passport'),
      router = express.Router();

const controllers = require('../controllers/category')

router.get('/', passport.authenticate('jwt', {session:false}) ,controllers.getAll)
router.get('/:id', controllers.getById)
router.delete('/:id', controllers.remove)
router.post('/', controllers.create)
router.patch('/:id', controllers.update)

module.exports = router