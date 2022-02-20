const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      passport = require('passport');

const analyticsRoutes = require('./routes/analytics'),
      authRoutes = require('./routes/auth'),
      categoryRoutes = require('./routes/category'),
      orderRoutes = require('./routes/order'),
      positionRoutes = require('./routes/position');
      
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(()=> console.log("MongoDB connected"))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/analytics', analyticsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app

