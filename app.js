const express = require('express')

const analyticsRoutes =require('./routes/analytics'),
      authRoutes = require('./routes/auth'),
      categoryRoutes = require('./routes/category'),
      orderRoutes = require('./routes/order'),
      positionRoutes = require('./routes/position');
      

const app = express()

app.use('/api/analytics', analyticsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app