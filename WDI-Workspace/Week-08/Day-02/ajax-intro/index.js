const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const logger = require('morgan')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/mongo-books', (err) => {
	if (err) {
		throw err
	} else {
		console.log("Successfully connected")
	}
})

app.use(logger('dev'))
app.use(bodyParser.json())

var Book = mongoose.model('Book', {name: String, author: String})

app.get('/', (req, res) => {
	res.sendFile('client/index.html', {root: __dirname});
})


app.get('/create-test-book', (req, res) => {
	var testBook = new Book({name: "Titan", author: "John D. Rockafeller"})
	testBook.save((err, thing) => {
		res.send(thing)
	})
})

app.post('/books', (req, res) => {
		Book.create(req.body, (err, hero) => {
			res.send(thing)
		})
	})

app.get('/books', (req, res) => {
	Book.find({}, (err, things) => {
	if (err) throw err;
	res.send(things)
	})
})

app.get('/books/:id', (req, res) => {
	Book.findByID(req.params.id, (err, thing) => {
		if (err) throw err;
		res.send(thing)
	})
})

app.delete('/books/:id', (req, res) => {
	Book.findByIdAndRemove(req.params.id, (err) => {
		res.send({message: "Book was deleted!"})
	})
})



app.listen(port, (err) => {
	console.log(err || "The server is running on port: " + port)
})