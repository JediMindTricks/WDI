
var name = prompt("What is your  name?");

function greet(name) {
	console.log("Hello, " + name)
};

greet(name);

function sayGoodbye(name) {
	console.log("Bye, have a wonderful time " + name + "!")
};

sayGoodbye(name);

function lastLetter(word) {
	console.log(word[word.length -1]);
}

function halfWord(word) {
	var length = word.length - 1;
	var half = length / 2;

	console.log(word.substring(0, half));
}

lastLetter("Wassup");
halfWord("Assembly");

