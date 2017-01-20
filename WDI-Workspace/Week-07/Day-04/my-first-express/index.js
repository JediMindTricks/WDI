// call the express package
var express = require('express')
var _ = require('underscore')
var toolkit = require('./toolkit.js')

// store express in a var
var app = express()

// Create counter
var counter = 0

booksList = ["bible", "quoran", "torah"]

app.get('/', function(req, res) {
	// Print in the console
	console.log('This is my Express app')
	// Print this text to the page
	counter = counter + 1
	res.send("you are visitor number: " + counter)
})

app.get('/books', function(req, res) {
	res.send(booksList)
})

/*
	one - "you are like a dream come true"
	two - "just wanna be with you"
	three - "cuz its plain to see that you are the only one for me"
*/

app.get('/one', function (req, res) {
	res.send("you are like a dream come true " + "<a href='http://localhost:3000/two'>Next</a>")
})

app.get('/two', function (req, res) {
	res.send("just wanna be with you " + "<a href='http://localhost:3000/three'>Next</a>")
})

app.get('/three', function (req, res) {
	res.send("cuz its plain to see that you are the only one for me " + "<a href='http://localhost:3000/four'>Next</a>")
})

app.get('/four', function (req, res) {
	res.send("repeat steps one through three " + "<a href='http://localhost:3000/one'>Next</a>")
})

// Print name from url params to the html body
app.get('/greet/:name/:lastname', function (req, res) {
	res.send('Hello ' + req.params.name + " " + req.params.lastname)
})

app.post('/books/:book', function (req, res) {
	booksList.push(req.params.book)
	res.send(booksList)
})

app.delete('/books/:name', function (req, res) {

		var index = booksList.indexOf(req.params.name);

		if (index > -1) {
	    booksList.splice(index, 1);
	    res.send(booksList)
		}
})

app.patch('/books/:book/:replace', function(req, res) {
		var i = booksList.indexOf(req.params.book)	
	    booksList.splice(i, 1, req.params.replace);
	    res.send(booksList)
})










// Call the listen function
app.listen(3000, function() {
	console.log("The server is running. " + "<a href='http://localhost:3000/two'>Next</a>")
})


