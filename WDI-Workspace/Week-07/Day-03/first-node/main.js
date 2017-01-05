var fs = require('fs')

var http = require('http')
var server = http.createServer(function(request, response){
	console.log("There was a request!")
	console.log(request.url)
	console.log(request.method)

	fs.readFile("./greetings.txt", "utf8", function(err, contents) {
	console.log(contents)
	response.writeHead(200, {"Content-Type": "text/html"})
	response.write("<h1>" + contents + "</h1>")
	response.end()
	})

	fs.writeFile("./greetings.txt", "utf8", function(err, ))
})



server.listen(3000, function () {
	console.log("Server running on port 3000")
})