# Creating an array class for the Fibonacci sequence
class FibArray < Array
	# I initalize the array with set starting values of 0, and 1
	def initialize
		self.push(0)
		self.push(1)
	end

	# Create a method to return the next number in the array
	def next
		return self[-1] + self[-2]
	end

	# Once we have the new number, go ahead and append that array
	def append_next
		self.push(self.next)
	end

	# Build a loop that will tell the function to stop adding numbers after it hits a past a certain number.
	def generate_up_to(n)
		while self.next < n
			self.append_next
		end
	end
end

# Generate new array
my_fib = FibArray.new

# Pass in a number to stop at
p my_fib.generate_up_to(4)

# Print that array
p my_fib