function factorial(n) {
	// take in the number and muliply by the next number then repeat until 0
		var result = 1
		while (n > 1) {
			result = n * result
			n--
		}
		return result
	
}

console.log(factorial(4))