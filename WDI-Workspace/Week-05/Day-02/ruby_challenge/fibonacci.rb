print "Give me a number to get the fibonocci: "
pos = gets.chomp

fib(pos)

def fib(pos)
	prev = 0
	current = 1
	k = 2
	while k < pos
		oldcurrent = current
		curr = oldcurrent + prev
		prev = oldcurrent
		k = k +1
	end
	return current
end