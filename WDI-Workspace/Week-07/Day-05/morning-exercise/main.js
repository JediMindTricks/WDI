var arr = ['carlos', 'jane', 'jake', 'carlos', 'jane']

// Create a array of names
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// Count the amount of words in a given array
	function countedStringsInArray (wordList) {
		var countedArray = wordList.reduce(function(allWords, word) { 
		// Create a var that calls the reduce method on word array
		// Also function takes in args "allWords" and "word"
		  if (word in allWords) {
		  	// If a word exists in all the names execute this code
		    allWords[word]++;
		    // add +1 instance to the hash key value for word
		  }
		  else {
		    allWords[word] = 1;
		    // If word doesn't exist add 1  to the hash key value
		  }
		  return allWords;
		  // return the array with count of all the names
		}, {});
		return countedArray
	};

console.log(countedStringsInArray(arr))