////////////////////////////////////////////////////////
// 1. A function named 'squareIt' that returns the square of a number that you pass to it as an argument.
var squareIt = function (num) {
	return num * num;
}
////////////////////////////////////////////////////////
// 2. A function named 'triple' that returns the triple of a number that you pass to it as an argument.
var triple = function (num) {
	return num * 3;
}
////////////////////////////////////////////////////////
// 3. A function named 'checkAge' that returns true if the age passed in as an argument is greater than or equal to 21. Otherwise, it returns false.
var checkAge = function (age) {
	if (age >= 21) {
		return true;
	} else {
		return false;
	}
}
////////////////////////////////////////////////////////
// 4. A function named 'countTrues' that takes an array of booleans as an argument. It returns the number of true's in the given array. For example:

// var myCollectionOfBooleans = [true, false, false, true, false, true, true, true]
// console.log(countTrues(myCollectionOfBooleans))
// should print the number 5 in the browser console
var countTrues = function (array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == true) {
			count++
		}
	}

	return count;
}
////////////////////////////////////////////////////////
// 5. A function named 'randomInteger' that will return a random whole number between 0 and any number you pass to it.
var randomInteger = function (num) {
	var x = Math.floor((Math.random() * num))
	return x;
}
////////////////////////////////////////////////////////
// 6. A function named 'motivate' that will print a motivational message of your choosing to the console, a given number of times.

// For example, if you run:
// motivate(5)

// the browser console should show:
// You will be great at writing JavaScript functions with enough practice.
// You will be great at writing JavaScript functions with enough practice.
// You will be great at writing JavaScript functions with enough practice.
// You will be great at writing JavaScript functions with enough practice.
// You will be great at writing JavaScript functions with enough practice.

var motivate = function (num) {
	var i = 0;
	while (i < num) {
		console.log('You will be great at writing JavaScript functions with enough practice.');
		i = i + 1;
	}
}

motivate(5)

////////////////////////////////////////////////////////
// 7. Write a function that solves a simple problem for you, and after testing it, share it in our class slack channel :). Get creative!

// For example:
// function shoutIt(phrase) {
//   return phrase.toUpperCase() + "!!!"
// }

// If I run: console.log(shoutIt("hello"))
// It will print: "HELLO!!!"