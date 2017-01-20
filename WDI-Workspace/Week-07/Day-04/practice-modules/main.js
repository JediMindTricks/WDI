
// Require the node package to use it in code
var _ = require('underscore')
var toolkit = require('./toolkit.js')
var http = require('http')
var request = require('request')

//Make a random number between 5 & 10
var server = http.createServer(function(req, res) {
		// Call the request package and call the get method
		// Enter args domain to 'GET', pass in callback function with err, response, body
		request.get('http://reddit.com/r/tech.json', function(err, response, body){
			// write the code that we 'GOT' and write it to the body of the html page

			var parsedBody = JSON.parse(body)

			res.write(body)
			res.end()
		})
})

server.listen(3000)

// An array of ages that I want to filter through
var ages = [23, 45, 64, 12, 22, 36, 29, 1010, 55];

console.log(toolkit.shuffle(ages));