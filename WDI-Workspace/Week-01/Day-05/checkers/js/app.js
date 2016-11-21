
// Get a number from the user
var myNumber = prompt("How big do you want the board in size: ");

// Create a var to grab the canvas and create a div
var canvas = document.getElementById('canvas');
var square = document.createElement('div');
var create = square.classList.add('.tile');

var build = function (num) {
	var i = 0;
	while (i < num) {
		
		for (var i = 0; i >= num; i--) {
		create

		// If myNumber is odd make it a dark square 
		if (myNumber % 2 == 1) {
			square.classList.add('.dark');
		} else {
			square.classList.add('.light');
		} 
	}

		i = i + 1;
	}
}






build(myNumber);
