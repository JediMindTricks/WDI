const 
	express = require('express'),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	app = express(),
	apiRoutes = require('./routes/api.js')

	// mongo connection
	mongoose.connect('mongodb://localhost/todo-spa', err => console.log(err || "Connected to MongoDB"))

	// middleware
	app.use(express.static(__dirname + '/public'))
	app.use(logger('dev'))
	app.use(bodyParser.json())


	// routes
	app.use('/api/todos', apiRoutes)


	app.listen(3000, err => console.log(err || "Server is running smoothly"))