const Todo = require('../models/Todo.js')

module.exports = {
	index,
	create,
	update,
	destroy
}

function index(req, res) {
	Todo.find({}, (err, todos) => res.json(todos))
}

function create(req, res) {
	Todo.create(req.body, (err, todo) => {
		if (err) return console.log(err)
			res.json({message: "Todo created.", success: true, todo})
	})
}

function update(req, res) {
	Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, todo) => {
		if (err) return console.log(err)
		res.json({message: "Updated todo.", success: true, todo})
	})
}

function destroy(req, res) {
	Todo.findByIdAndRemove(req.params.id, (err) => {
		res.json({message: "Todo deleted", success: true})
	})
}