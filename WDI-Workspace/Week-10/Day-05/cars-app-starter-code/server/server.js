const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/cars.js')
  PORT = process.env.port || 3000
  mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost/cars-app'

mongoose.connect(mongoUrl, (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(process.env.PWD + '/client'))

app.get('/', (req, res) => {
  res.sendFile(process.env.PWD + '/client/index.html')
})

app.use('/api', apiRoutes)

app.get('*', (req, res) => res.redirect('/'))

app.listen(PORT, (err) => {
  console.log(err || "Server running on port " + PORT)
})
