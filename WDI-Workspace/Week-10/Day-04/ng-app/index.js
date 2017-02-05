const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json())

const port = 3000
var booksList = [{_id: 1, name: '1984', author:'Orwell'},
                 {_id: 2, name: 'Torah', author:'God'},
                 {_id: 3, name: 'Captain Underpants', author: 'Dave'}]

app.get('/', function(req, res) {
  res.sendFile('client/index.html', {root: __dirname})
})

app.get('/books', function(req, res){
  res.json(booksList)
})

app.post('/books', function(req, res){
  console.log(req.body);
  res.json(booksList)
})


app.delete('/books/:id', function(req, res){
  booksList = booksList.filter(function(b){
    return b._id != req.params.id
  })
  res.json(booksList)
})

app.listen(port, function() {
  console.log('Server started on port: ' + port)
})