// Challenge 2
// Take in a string and reverse it
// "Hello Kitty" should return "yttik olleH"
var str = "Hello Kitty"

function reverseString(str) {
	// Set result to an empty string
	var result = ''
	// Loop through entered string
	for (var i = 0; i < str.length; i++) {
		// Set result equal to the current char + the result
		result = str[i] + result
	}
	// return result
	return result
}

console.log(reverseString(str))

function reverse(str) {
	var newArray = []
	for (var i = str.length - 1; i >= 0; i--) {
		str[i]
	}

	return newArray.join(',')
}

console.log(reverse(str))