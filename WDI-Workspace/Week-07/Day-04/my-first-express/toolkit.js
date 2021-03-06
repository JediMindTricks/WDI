// Create a toolkit of functions that I may reuse

// Make toolkit available to use in main.js
module.exports = {
	// Create a random number between a min and max
	genRandomNum: genRandomNum,
	// Fisher Yates Shuffle Algorithm
	shuffle: shuffle,
	// Linear search through data item by item
	linearSearch: linearSearch,
	// Create circumference
	circumference: circumference,
	// Create a timer w/ setTimeout
	timer: timer,
	// Binary Search through data by spliting through data
	binarySearchIndex: binarySearchIndex,
	// Basic way to sort a collection
	bubbleSort: bubbleSort,
	// Iterate through the collection until all data is sorted
	insertionSort: insertionSort,


}


// Create a random number between a min and max
	function genRandomNum(min, max) {
		// Take a random # milti by max - min, add min num, then round
		return Math.round((Math.random() * (max - min) ) + min)
	}

// Fisher Yates Shuffle Algorithm
	function shuffle (array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }

	  return array;
	}

// Linear search through data
	function linearSearch(values, target) {
	// Takes in data type collection to search, and value it is looking for
	  for(var i = 0; i < values.length; ++i){
	  	// Iterates through the list and checks for a match
	    if (values[i] == target) { return i; }
	    // If target matches return that value
	  }
	  return -1;
	}

// Create circumference
	function circumference(radius) {
		return 2 * Math.PI * radius
	}

// Binary Search
// Binary search relies on a divide and conquer strategy to find a value within an already-sorted collection.
	function binarySearchIndex(values, target) {
		// Takes in data type collection to search, and value it is looking for
	  return binarySearch(values, target, 0, values.length - 1);
	};

	function binarySearch(values, target, start, end) {
		// set start and end values to begin search
	  if (start > end) { return -1; } //does not exist

	  // Will divide the sum of the start and end by 2 then round down
	  var middle = Math.floor((start + end) / 2);
	  var value = values[middle];

	  // Keep searching though targets until we get to a answer
	  if (value > target) { return binarySearch(values, target, start, middle-1); }
	  if (value < target) { return binarySearch(values, target, middle+1, end); }
	  return middle; //found!
	}

// Create timer function
	function timer(seconds) {
		setTimeout(function(){
			console.log("Timer Done!")
		}, seconds * 1000)
	}

// Bubble Sort
	// Bubble sort is the most basic way to sort a collection. 
	// It works by sequentially going through your array and comparing two values at a time, 
	// swapping them if necessary. It then repeats the process until no swaps are required.
	function bubbleSort(values) {
	  var length = values.length - 1;
	  do {
	    var swapped = false;
	    for(var i = 0; i < length; ++i) {
	      if (values[i] > values[i+1]) {
	        var temp = values[i];
	        values[i] = values[i+1];
	        values[i+1] = temp;
	        swapped = true;
	      }
	    }
	  }
	  while(swapped == true)
	  return values
	};

// Insertion sort relies on inserting a single element in the right for a given iteration. 
// Every iteration through the collection leaves a greater segment sorted.
	function insertionSort(values) {
	  var length = values.length;
	  for(var i = 1; i < length; ++i) {
	    var temp = values[i];
	    var j = i - 1;
	    for(; j >= 0 && values[j] > temp; --j) {
	      values[j+1] = values[j];
	    }
	    values[j+1] = temp;
	  }
	  return values
	};








