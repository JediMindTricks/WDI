const express = require('express'),
	app = express()

const carSchema = new mongoose.Schema({
	year: Number,
	make: String,
	model: String
})

app.use(express.static(process.env.PWD + '/client'))

app.get('/', (req, res)=> {
	res.sendFile(process.env.PWD + '/client/index.html')
})

// Api routes
// app.get('/api/cars', (req, res)=> {
// 	res.json({message: "All cars here..."})
// })

app.get('/api/cars', (req, res)=> {
	res.json(cars)
})


app.listen(3000, (err)=> {
	console.log(err || "Server is running good.")
})