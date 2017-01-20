function findMinIndex(arr) {
	var minIndex = 0
	var smallest = arr[0]

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i]
			minIndex = i
		}
	}

	return minIndex
}

var array = [3,1,4,2,0,5,7]

console.log(findMinIndex(array))