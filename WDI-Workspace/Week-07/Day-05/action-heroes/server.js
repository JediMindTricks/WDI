// Require all necessary packages
var express = require('express')
var app = express()
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')
var Hero = require('./models/Hero.js')




	// Connect to mongo
	mongoose.connect('mongodb://localhost/action-heroes', function (err) {
		console.log(err || "Successfully connected to Mongo (action-heroes)")
	})

	// middleware:
	// log all requests to app
	app.use(logger('dev'))
	app.use(bodyParser.json())

	// Root route
	app.get('/heroes', function (req, res) {
		Hero.find({}, /* "name realName -_id",*/ function (err, heroes) {
			// Find hero by, limit info to, and what to do when found
			res.json(heroes)
		})
		 
	})

	// Create Hero
	app.post('/heroes', function(req, res) {
		Hero.create(req.body, function(err, hero) {
			res.json(hero)
		})
	})

	// Select single hero from url
	app.get('/heroes/:id', function (req, res) {
		Hero.findById(req.params.id, function(err, hero) {
			res.json(hero)
		})
		/* find hero by ID */
	})

	// Update a Hero
	app.patch('/heroes/:id', function (req, res) {
		Hero.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, hero) {
			// req.body selects the field to update
			res.json(hero)
		})
	})

	// Delete heroes from database
	app.delete('/heroes/:id', function(req, res) {
		Hero.findByIdAndRemove(req.params.id, function (err) {
			res.json({message: "Hero Removed.", success: true})
		})
	})

	// Start server
	app.listen(3000, function(err) {
		console.log(err || "Server is started on port:3000")
	})