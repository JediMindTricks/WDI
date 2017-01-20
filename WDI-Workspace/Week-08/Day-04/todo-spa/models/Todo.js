const
	mongoose = require('mongoose'),
	todoSchema = new mongoose.Schema({
		task: {type: String, required: true},
		completed: {type: Boolean, default: false}
	}, {timestamps: true})


	module.exports = mongoose.model('Todo', todoSchema)