var mongoose = require('mongoose')
// Creating 'Hero' model by creating properties for 'Heroes'
var heroSchema = new mongoose.Schema({
	// Name and data type
	name: String,
	realName: String,
	birthDate: Date,
	villan: String,
	powerLevel: Number,
	agility: Number
})

// Register Hero model to reference
var Hero = mongoose.model('Hero', heroSchema)
// Export the Hero model
module.exports = Hero