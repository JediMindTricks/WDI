var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', (req, res)=> {
	res.sendFile('/index.html', {root: __dirname})
})

io.on('connection', (socket) => {
	console.log('connected')
	socket.on('raton-movio', (datos)=>{
		console.log(datos)
	})
})

http.listen(3000, () => {
	console.log('Server is running on port: 3000')
})

io.on('background', (colour)=> {
	io.emit('change-color', colour);
})