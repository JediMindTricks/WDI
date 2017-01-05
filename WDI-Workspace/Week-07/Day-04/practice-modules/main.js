
// Requre the node package to use it in code
var _ = require('underscore')

// An array of ages that I want to filter through
var ages = [23, 45, 64, 12, 22, 36, 29];

// Create a var and used the underscore package filter to sort through array
var overTwentyOne = _.filter(ages, function(a){
	// Will filter through all the nums and will return a new array
	// If num is over 21
	return a > 21
})

// Print results of new array to console.
console.log(overTwentyOne)