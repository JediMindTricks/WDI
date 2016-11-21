

var myButton = document.querySelector("#myButton")
var myHeading = document.querySelector("h1")
var msg = prompt("Enter Message");
var toggle = null;

// function yell() {
// 	console.log('AHHHHH');
// 	toggle = !toggle
// 	myHeading.innerText = toggle
// }

function whisper() {
	myButton.innerText = "I'm Clicked"
}

myButton.addEventListener('click', function() {
	myHeading.innerText = msg
});
myButton.addEventListener('click', whisper);

